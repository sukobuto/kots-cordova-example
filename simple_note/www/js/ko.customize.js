(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['knockout', 'jquery', 'bootstrap', 'knockout.validation', 'jquery.caret'], factory);
	} else {
		// Browser globals
		factory(ko, jQuery);
	}
}(function(ko, $) {

	ko.validation.configure({
		registerExtenders: true,
		messagesOnModified: true,
		insertMessages: false,
		parseInputAttributes: true,
		messageTemplate: null
	});
	
	ko.bindingHandlers.dump = {
		update: function(element, valueAccessor, allBindings) {
			var value = ko.unwrap(valueAccessor()),
				dumpTo = ko.unwrap(allBindings.get('dumpTo')) || 'console',
				$elm = $(element);
			switch (dumpTo) {
				case 'console':
					console.log(value);
					break;
				case 'dom':
					$elm.html('<pre>' + JSON.stringify(value, null, 4) + '</pre>');
					break;
			}
		}
	};
	
	ko.bindingHandlers.modalShown = {
		init: function(element, valueAccessor) {
			var $elm = $(element), value = valueAccessor();
			if (ko.isWriteableObservable(value)) {
				$elm.on('hidden.bs.modal', function(e) {
					value(false)
				});
			}
			$elm.on('shown.bs.modal', function(e) {
				$elm.find("[autofocus]:first").focus();
			});
		},
		update: function(element, valueAccessor) {
			var value = valueAccessor();
			$(element).modal(!ko.unwrap(value) ? 'hide' : 'show');
		}
	};
	
	// bitField binding
	ko.bindingHandlers.bitField = {
		'after': ['value', 'attr'],
		'init': function (element, valueAccessor, allBindings) {

			function checkedFlag() {
				return allBindings['has']('checkedFlag')
					? ko.unwrap(allBindings.get('checkedFlag'))
					: element.value;
			}

			function updateModel() {
				// This updates the model value from the view value
				// It runs in response to DOM events (click) and changes in checkedFlag.
				var isChecked = element.checked,
					elemValue = checkedFlag();

				// When we're first setting up this computed, don't change any model state.
				if (!shouldSet) {
					return;
				}

				var modelValue = valueAccessor();
				var unwrapped = ko.unwrap(modelValue);
				if (oldElemValue !== elemValue) {
					if (isChecked) {
						if (oldElemValue !== undefined) {
							unwrapped &= ~oldElemValue;
						}
						unwrapped |= elemValue;
					}
					oldElemValue = elemValue;
				} else {
					if (isChecked) {
						unwrapped |= elemValue;
					} else {
						unwrapped &= ~elemValue;
					}
				}
				if (ko.isObservable(modelValue)) modelValue(unwrapped);
				else valueAccessor(unwrapped);
			}

			function updateView() {
				// This updates the view value from the model value.
				// It runs in response to changes in the bound (checked) value.
				var modelValue = ko.unwrap(valueAccessor());

				element.checked = (modelValue & checkedFlag()) > 0;
			}

			if (element.type !== "checkbox") return;

			var oldElemValue = checkedFlag(),
				shouldSet = false;

			// Set up two computeds to update the binding:

			// The first responds to changes in the checkedFlag value and to element clicks
			ko.computed(updateModel, null, { disposeWhenNodeIsRemoved: element });
			ko.utils.registerEventHandler(element, "click", updateModel);

			// The second responds to changes in the model value (the one associated with the bitField binding)
			ko.computed(updateView, null, { disposeWhenNodeIdRemoved: element });

			shouldSet = true;
		}
	};
	
	// caret binding
	ko.bindingHandlers.caret = {
		init: function(element, valueAccessor, allBindings) {
			var $elm = $(element), suspend = true;

			$elm.bind('keydown click focus', function(e) {
				var pos = $elm.caret();
				var modelValue = valueAccessor();
				suspend = true;
				if (ko.isObservable(modelValue)) modelValue(pos);
				else valueAccessor(pos);
			});
			
			ko.computed(function() {
				var modelValue = ko.unwrap(valueAccessor());
				if (suspend) {
					suspend = false;
					if (typeof modelValue == 'number') return;
				}
				var st = element.scrollTop;
				$elm.caret(modelValue);
				element.scrollTop = st;
			});
		}
	};
	
}));
