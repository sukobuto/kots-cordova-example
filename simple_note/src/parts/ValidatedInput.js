/// <reference path="../references.d.ts" />
define(["require", "exports", './Validation'], function (require, exports, Validation) {
    function extractField(data, name) {
        data = ko.unwrap(data);
        return ko.isObservable(data[name]) ? data[name] : ko.getObservable(data, name);
    }
    var dummyValidation = ko.observable(new Validation({}));
    // 通常のテキストボックス
    ko.components.register('text-input', {
        template: require('./validated-input/Text.html'),
        viewModel: {
            createViewModel: function (params) {
                var vm = ko.utils.extend({
                    // required params
                    title: null,
                    data: null,
                    field_name: null,
                    // optional params
                    validation: dummyValidation,
                    enabled: true,
                    placeholder: '',
                    necessary: false,
                    description: false
                }, params);
                vm['field'] = extractField(params.data, params.field_name);
                return vm;
            }
        }
    });
    // デートピッカー付き適すボトックス
    ko.components.register('date-input', {
        template: require('./validated-input/Date.html'),
        viewModel: {
            createViewModel: function (params) {
                var vm = ko.utils.extend({
                    // required params
                    title: null,
                    data: null,
                    field_name: null,
                    // optional params
                    validation: dummyValidation,
                    format: 'YYYY-MM-DD',
                    enabled: true,
                    placeholder: '',
                    necessary: false,
                    description: false
                }, params);
                vm['field'] = extractField(params.data, params.field_name);
                return vm;
            }
        }
    });
    // ドロップダウンリスト
    ko.components.register('select-input', {
        template: require('./validated-input/Select.html'),
        viewModel: {
            createViewModel: function (params) {
                var vm = ko.utils.extend({
                    // required params
                    title: null,
                    data: null,
                    field_name: null,
                    options: null,
                    // optional params
                    validation: dummyValidation,
                    optionsValue: null,
                    optionsText: null,
                    optionsCaption: null,
                    action: null,
                    action_label: '',
                    action_title: '',
                    action_icon: '',
                    necessary: false,
                    description: false
                }, params);
                vm['field'] = extractField(params.data, params.field_name);
                vm['field'].subscribe(function (newValue) { return console.log(newValue); });
                return vm;
            }
        }
    });
    // 複合ラジオボタン
    ko.components.register('radio-buttons-input', {
        template: require('./validated-input/RadioButtons.html'),
        viewModel: {
            createViewModel: function (params) {
                var vm = ko.utils.extend({
                    // required params
                    title: null,
                    data: null,
                    field_name: null,
                    options: null,
                    // optional params
                    validation: dummyValidation,
                    necessary: false,
                    description: false
                }, params);
                vm['field'] = extractField(params.data, params.field_name);
                return vm;
            }
        }
    });
});
//# sourceMappingURL=ValidatedInput.js.map