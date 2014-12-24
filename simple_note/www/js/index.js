/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(1), __webpack_require__(13), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, DependencyInjector, Injectable, Shell, Storage, Toaster) {
	    var Application = (function (_super) {
	        __extends(Application, _super);
	        function Application() {
	            var _this = this;
	            _super.call(this);
	            this.shell = null;
	            this.onDeviceReady = function () {
	                _this.receivedEvent('deviceready');
	                _this.declareServices();
	                ko.punches.enableAll();
	                ko.applyBindings(_this);
	                var shell = new Shell();
	                _this.shell = shell.initialize();
	                shell.load();
	            };
	            ko.track(this);
	        }
	        Application.prototype.initialize = function () {
	            var di = this.declareServices();
	            this.bindEvents();
	        };
	        Application.prototype.declareServices = function () {
	            var di = DependencyInjector.factoryDefault();
	            di.set('storage', function () { return new Storage(); }, true);
	            di.set('toaster', function () { return new Toaster(); }, true);
	            return di;
	        };
	        Application.prototype.bindEvents = function () {
	            document.addEventListener('deviceready', this.onDeviceReady, false);
	        };
	        Application.prototype.receivedEvent = function (id) {
	            console.log('Received Event: ' + id);
	        };
	        return Application;
	    })(Injectable);
	    KnockoutElse.init(); // knockout-else    : https://github.com/brianmhunt/knockout-else
	    ko.punches.enableAll(); // knockout-punches : https://github.com/mbest/knockout.punches
	    exports.app = new Application();
	    exports.app.initialize();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=Application.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="references.d.ts" />
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Injectable) {
	    var Shell = (function (_super) {
	        __extends(Shell, _super);
	        function Shell() {
	            _super.call(this);
	            this.routeMap = null;
	            this.page = null;
	            this.menuId = null;
	            ko.track(this);
	        }
	        Shell.prototype.initialize = function () {
	            var routes = this.declareRoutes();
	            this.routeMap = Enumerable.from(routes).where(function (r) { return r.name != null; }).toObject(function (r) { return r.name; }, function (r) { return r; });
	            routie(Enumerable.from(routes).toObject(function (r) { return r.path; }, function (r) { return r.handler; }));
	            return this;
	        };
	        Shell.prototype.load = function () {
	            $('#splash').remove();
	            routie(window.location.hash);
	        };
	        Shell.prototype.transit = function (name, context) {
	            this.page = this.routeMap[name].page();
	            this.page.load(context);
	            this.menuId = name;
	        };
	        Shell.prototype.declareRoutes = function () {
	            var _this = this;
	            return [
	                {
	                    name: 'home',
	                    page: __webpack_require__(6).factory,
	                    nav: { label: 'Home', icon: 'folder' },
	                    path: '',
	                    handler: function () { return _this.transit('home', {}); }
	                },
	                {
	                    name: 'edit',
	                    page: __webpack_require__(11).factory,
	                    path: 'add',
	                    handler: function () { return _this.transit('edit', {}); }
	                },
	                {
	                    path: 'edit/:id',
	                    handler: function (id) { return _this.transit('edit', { id: +id }); }
	                },
	            ];
	        };
	        return Shell;
	    })(Injectable);
	    return Shell;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=Shell.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    var DependencyInjector = (function () {
	        function DependencyInjector() {
	            this.services = {};
	            this.shared_instances = {};
	        }
	        DependencyInjector.getDefault = function () {
	            return this._default;
	        };
	        DependencyInjector.setDefault = function (_default) {
	            this._default = _default;
	        };
	        DependencyInjector.factoryDefault = function () {
	            return this._default = new DependencyInjector();
	        };
	        DependencyInjector.prototype.set = function (name, service, shared) {
	            this.services[name] = service;
	            service._shared = shared || false;
	            return this;
	        };
	        DependencyInjector.prototype.get = function (name, shared) {
	            if (!this.services.hasOwnProperty(name)) {
	                throw Error('Service' + name + ' not found.');
	            }
	            var service = this.services[name];
	            if (typeof service == 'function') {
	                if (service._shared || shared) {
	                    if (this.shared_instances.hasOwnProperty(name)) {
	                        return this.shared_instances[name];
	                    }
	                    else {
	                        return this.shared_instances[name] = service();
	                    }
	                }
	                else {
	                    return service();
	                }
	            }
	            else {
	                return service;
	            }
	        };
	        return DependencyInjector;
	    })();
	    return DependencyInjector;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=DependencyInjector.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, DependencyInjector) {
	    var DependencyInjectable = (function () {
	        function DependencyInjectable() {
	        }
	        Object.defineProperty(DependencyInjectable.prototype, "di", {
	            get: function () {
	                if (!this._di)
	                    return DependencyInjector.getDefault();
	                return this._di;
	            },
	            set: function (di) {
	                this._di = di;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DependencyInjectable.prototype, "storage", {
	            // application services getters
	            //get api() : AdminApi {
	            //	return this.di.get('api');
	            //}
	            get: function () {
	                return this.di.get('storage');
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DependencyInjectable.prototype, "preference", {
	            get: function () {
	                return this.di.get('preference');
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(DependencyInjectable.prototype, "toaster", {
	            get: function () {
	                return this.di.get('toaster');
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return DependencyInjectable;
	    })();
	    return DependencyInjectable;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=DependencyInjectable.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../references.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    var Toaster = (function () {
	        function Toaster() {
	            /**
	             * jQuery Ajax のエラーハンドラとして使えるようメンバ関数として定義
	             * @param message
	             */
	            this.error = function (message) {
	                toastr.error(message, 'エラー');
	            };
	        }
	        Toaster.prototype.success = function (message, title) {
	            toastr.success(message, title);
	        };
	        Toaster.prototype.info = function (message, title) {
	            toastr.info(message, title);
	        };
	        Toaster.prototype.warning = function (message, title) {
	            toastr.warning(message, title);
	        };
	        return Toaster;
	    })();
	    return Toaster;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=Toaster.js.map

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Page, Note) {
	    var componentId = 'home-page';
	    var HomePage = (function (_super) {
	        __extends(HomePage, _super);
	        function HomePage() {
	            _super.call(this);
	            this.loading = false;
	            this.notes = [];
	            this.edit = function (note) {
	                Page.transfer('edit/' + note.id);
	            };
	            this.componentId = componentId;
	            ko.track(this);
	        }
	        HomePage.factory = function () {
	            if (this.instance != null)
	                return this.instance;
	            return this.instance = new HomePage();
	        };
	        HomePage.prototype.load = function (context) {
	            var _this = this;
	            this.loading = true;
	            this.storage.getAll(Note.storageKey).then(function (items) {
	                _this.notes = items.map(Note.factory);
	            }, this.toaster.error).always(function () { return _this.loading = false; });
	        };
	        HomePage.prototype.add = function () {
	            Page.transfer('add');
	        };
	        HomePage.instance = null;
	        return HomePage;
	    })(Page);
	    Page.register(componentId, HomePage, __webpack_require__(10));
	    return HomePage;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=HomePage.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Injectable) {
	    var Component = (function (_super) {
	        __extends(Component, _super);
	        function Component() {
	            _super.apply(this, arguments);
	        }
	        Component.register = function (name, klass, template) {
	            ko.components.register(name, {
	                template: template,
	                viewModel: {
	                    createViewModel: function (params, componentInfo) {
	                        return params instanceof klass ? params : ko.unwrap(params.option);
	                    }
	                }
	            });
	        };
	        return Component;
	    })(Injectable);
	    return Component;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=Component.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Component) {
	    var Page = (function (_super) {
	        __extends(Page, _super);
	        function Page() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * ページ名を取得するメソッド
	         */
	        Page.prototype.getName = function () {
	            throw new Error('getName method is not implemented.');
	        };
	        /**
	         * ページごとのテンプレートIDを取得するメソッド
	         */
	        Page.prototype.getTemplate = function () {
	            throw new Error('getTemplate method is not implemented.');
	        };
	        /**
	         * 遷移後に呼び出されるイベントメソッド
	         * @param context
	         */
	        Page.prototype.load = function (context) {
	        };
	        Page.factory = function () {
	            throw new Error('factory method is not implemented.');
	        };
	        Page.transfer = function (url) {
	            routie(url);
	        };
	        return Page;
	    })(Component);
	    return Page;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=Page.js.map

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<header class=\"bar bar-nav\">\r\n\t<h1 class=\"title\">Simple Note</h1>\r\n</header>\r\n\r\n<div class=\"content\">\r\n\t<ul class=\"table-view\" data-bind=\"foreach: notes\">\r\n\t\t<li class=\"table-view-cell\">\r\n\t\t\t<a class=\"navigate-right\" href=\"#\" data-bind=\"click: $parent.edit\">\r\n\t\t\t\t{{ title }}\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\r\n<nav class=\"bar bar-tab\">\r\n\t<a class=\"tab-item\" href=\"#\" data-bind=\"click: add\">\r\n\t\t<span class=\"icon icon-edit\"></span>\r\n\t\t<span class=\"tab-label\">Create New</span>\r\n\t</a>\r\n</nav>";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Page, Note) {
	    var componentId = 'edit-page';
	    var EditPage = (function (_super) {
	        __extends(EditPage, _super);
	        function EditPage() {
	            _super.call(this);
	            this.loading = false;
	            this.saving = false;
	            this.note = null;
	            this.componentId = componentId;
	            ko.track(this);
	        }
	        EditPage.factory = function () {
	            if (this.instance != null)
	                return this.instance;
	            return this.instance = new EditPage();
	        };
	        EditPage.prototype.load = function (context) {
	            var _this = this;
	            if (context.id) {
	                this.loading = true;
	                this.storage.get(Note.storageKey, context.id).then(function (item) {
	                    _this.note = Note.factory(item);
	                }, this.toaster.error).always(function () { return _this.loading = false; });
	            }
	            else {
	                this.note = new Note();
	            }
	        };
	        EditPage.prototype.save = function () {
	            var _this = this;
	            this.saving = true;
	            this.storage.save(Note.storageKey, this.note).then(function () {
	                _this.toaster.success('保存しました');
	                _this.back();
	            }, this.toaster.error).always(function () { return _this.saving = false; });
	        };
	        EditPage.prototype.back = function () {
	            Page.transfer('');
	        };
	        EditPage.prototype.cancel = function () {
	            this.back();
	        };
	        EditPage.prototype.remove = function () {
	            var _this = this;
	            this.saving = true;
	            this.storage.delete(Note.storageKey, this.note.id).then(function () {
	                _this.toaster.success('削除しました');
	                _this.back();
	            }, this.toaster.error).always(function () { return _this.saving = false; });
	        };
	        EditPage.instance = null;
	        return EditPage;
	    })(Page);
	    Page.register(componentId, EditPage, __webpack_require__(12));
	    return EditPage;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=EditPage.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<header class=\"bar bar-nav\">\r\n\t<h1 class=\"title\">Simple Note</h1>\r\n</header>\r\n\r\n<div class=\"content\">\r\n\t<div class=\"content-padded\">\r\n\t\t<form data-bind=\"with: note\">\r\n\t\t\t<input type=\"text\" placeholder=\"タイトル\" value=\"{{ title }}\"/>\r\n\t\t\t<textarea rows=\"10\" value=\"{{ body }}\"></textarea>\r\n\t\t\t<button class=\"btn btn-positive btn-block\"\r\n\t\t\t\t\t\t\tdata-bind=\"click: $parent.save, disable: $parent.saving\">\r\n\t\t\t\t保存して閉じる {{#if $parent.saving}}<i class=\"fa fa-spinner fa-spin\"></i>{{/if}}\r\n\t\t\t</button>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<nav class=\"bar bar-tab\">\r\n\t<a class=\"tab-item\" href=\"#\" data-bind=\"click: cancel\">\r\n\t\t<span class=\"icon icon-left\"></span>\r\n\t\t<span class=\"tab-label\">Cancel</span>\r\n\t</a>\r\n\t<a class=\"tab-item\" href=\"#removeModal\">\r\n\t\t<span class=\"icon icon-trash\"></span>\r\n\t\t<span class=\"tab-label\">Delete</span>\r\n\t</a>\r\n</nav>\r\n\r\n<div id=\"removeModal\" class=\"modal\">\r\n\t<header class=\"bar bar-nav\">\r\n\t\t<a class=\"icon icon-close pull-right\" href=\"#removeModal\"></a>\r\n\t\t<h1 class=\"title\">削除</h1>\r\n\t</header>\r\n\t<div class=\"content\">\r\n\t\t<p class=\"content-padded\" data-bind=\"with: note\">\r\n\t\t\t{{ title }} を削除します。<br>\r\n\t\t\tよろしいですか?\r\n\t\t</p>\r\n\r\n\t\t<form>\r\n\t\t\t<button class=\"btn btn-positive btn-block\"\r\n\t\t\t\t\t\t\tdata-bind=\"click: remove, disable: saving\">\r\n\t\t\t\tはい {{#if saving}}<i class=\"fa fa-spinner fa-spin\"></i>{{/if}}\r\n\t\t\t</button>\r\n\t\t\t<a class=\"btn\" href=\"#removeModal\">キャンセル</a>\r\n\t\t</form>\r\n\t</div>\r\n</div>";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    var LocalStorageAdapter = (function () {
	        function LocalStorageAdapter() {
	        }
	        LocalStorageAdapter.prototype.makeIndex = function (className) {
	            var index = localStorage.getItem('_local_index_' + className);
	            var items = localStorage.getItem(className);
	            if (index) {
	                index++;
	            }
	            else if (typeof items === 'array') {
	                index = Enumerable.from(items).max(function (item) { return item['id']; }) + 1;
	            }
	            else {
	                index = 1;
	            }
	            localStorage.setItem('_local_index_' + className, index);
	            return index;
	        };
	        LocalStorageAdapter.prototype.read = function (className) {
	            var items = JSON.parse(localStorage.getItem(className));
	            if (Array.isArray(items))
	                return items;
	            return [];
	        };
	        LocalStorageAdapter.prototype.write = function (className, items) {
	            localStorage.setItem(className, JSON.stringify(items, function (key, value) {
	                // undefined だとプロパティごと省略されてしまうので null に置換
	                if (typeof value === 'undefined')
	                    return null;
	                return value;
	            }));
	        };
	        LocalStorageAdapter.prototype.doAsync = function (callback) {
	            setTimeout(callback, 0);
	        };
	        LocalStorageAdapter.prototype.save = function (className, item) {
	            var _this = this;
	            var dfd = $.Deferred();
	            this.doAsync(function () {
	                var items = _this.read(className);
	                if (item.hasOwnProperty('id') && item['id'] > 0) {
	                    // 同じ ID のアイテムを上書き
	                    var overwrite = false;
	                    items.some(function (v, i) {
	                        if (v.hasOwnProperty('id') && v['id'] === item['id']) {
	                            items[i] = item;
	                            overwrite = true;
	                        }
	                    });
	                    if (!overwrite)
	                        items.push(item);
	                }
	                else {
	                    item['id'] = _this.makeIndex(className);
	                    items.push(item);
	                }
	                _this.write(className, items);
	                dfd.resolveWith(null, [item]);
	            });
	            return dfd.promise();
	        };
	        LocalStorageAdapter.prototype.saveAll = function (className, items) {
	            var _this = this;
	            var dfd = $.Deferred();
	            this.doAsync(function () {
	                var items = _this.read(className);
	                items.forEach(function (item) {
	                    if (item.hasOwnProperty('id') && item['id'] > 0) {
	                        if (item.hasOwnProperty('_destroy') && item._destroy) {
	                            // 削除フラグがついていたら削除
	                            items.some(function (v, i) {
	                                if (v.hasOwnProperty('id') && v['id'] === item['id']) {
	                                    items.splice(i, 1);
	                                }
	                            });
	                        }
	                        else {
	                            // 同じ ID のアイテムを上書き
	                            var overwrite = false;
	                            items.some(function (v, i) {
	                                if (v.hasOwnProperty('id') && v['id'] === item['id']) {
	                                    items[i] = item;
	                                    overwrite = true;
	                                }
	                            });
	                            if (!overwrite)
	                                items.push(item);
	                        }
	                    }
	                    else {
	                        if (!(item.hasOwnProperty('_destroy') && item._destroy)) {
	                            item['id'] = _this.makeIndex(className);
	                            items.push(item);
	                        }
	                    }
	                });
	                _this.write(className, items);
	                dfd.resolveWith(null, [items]);
	            });
	            return dfd.promise();
	        };
	        LocalStorageAdapter.prototype.get = function (className, id) {
	            var _this = this;
	            var dfd = $.Deferred();
	            this.doAsync(function () {
	                var item = Enumerable.from(_this.read(className)).firstOrDefault(function (item) { return item['id'] === id; }, null);
	                dfd.resolveWith(null, [item]);
	            });
	            return dfd.promise();
	        };
	        LocalStorageAdapter.prototype.getAll = function (className) {
	            var _this = this;
	            var dfd = $.Deferred();
	            this.doAsync(function () {
	                var items = _this.read(className);
	                dfd.resolveWith(null, [items]);
	            });
	            return dfd.promise();
	        };
	        LocalStorageAdapter.prototype.delete = function (className, id) {
	            var _this = this;
	            var dfd = $.Deferred();
	            this.doAsync(function () {
	                var items = _this.read(className);
	                items.some(function (v, i) {
	                    if (v.hasOwnProperty('id') && v['id'] === id) {
	                        items.splice(i, 1);
	                    }
	                });
	                _this.write(className, items);
	                dfd.resolve();
	            });
	            return dfd.promise();
	        };
	        LocalStorageAdapter.prototype.deleteAll = function (className) {
	            var dfd = $.Deferred();
	            this.doAsync(function () {
	                localStorage.removeItem(className);
	                dfd.resolve();
	            });
	            return dfd.promise();
	        };
	        return LocalStorageAdapter;
	    })();
	    return LocalStorageAdapter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=LocalStorageAdapter.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    var Note = (function () {
	        function Note(data) {
	            this.id = data && data.id || 0;
	            this.title = data && data.title || '';
	            this.body = data && data.body || '';
	            ko.track(this);
	        }
	        Note.factory = function (data) {
	            return new Note(data);
	        };
	        Note.storageKey = 'notes';
	        return Note;
	    })();
	    return Note;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=Note.js.map

/***/ }
/******/ ])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODJmNWY1YmJhN2M5NDAzODUyOWUiLCJ3ZWJwYWNrOi8vLy4vQXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vU2hlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vZGkvRGVwZW5kZW5jeUluamVjdG9yLmpzIiwid2VicGFjazovLy8uL2RpL0RlcGVuZGVuY3lJbmplY3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL1RvYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZS9ob21lL0hvbWVQYWdlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZS9ob21lL0hvbWVQYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcGFnZS9ub3RlL0VkaXRQYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2Uvbm90ZS9FZGl0UGFnZS5odG1sIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0xvY2FsU3RvcmFnZUFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvTm90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMs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Y2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA4MmY1ZjViYmE3Yzk0MDM4NTI5ZVxuICoqLyIsInZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xyXG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcclxufTtcclxuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICdkaS9EZXBlbmRlbmN5SW5qZWN0b3InLCAnZGkvRGVwZW5kZW5jeUluamVjdGFibGUnLCAnLi9TaGVsbCcsICdzZXJ2aWNlcy9Mb2NhbFN0b3JhZ2VBZGFwdGVyJywgJ3NlcnZpY2VzL1RvYXN0ZXInXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIERlcGVuZGVuY3lJbmplY3RvciwgSW5qZWN0YWJsZSwgU2hlbGwsIFN0b3JhZ2UsIFRvYXN0ZXIpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICAgICAgX19leHRlbmRzKEFwcGxpY2F0aW9uLCBfc3VwZXIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIEFwcGxpY2F0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5zaGVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMub25EZXZpY2VSZWFkeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlY2VpdmVkRXZlbnQoJ2RldmljZXJlYWR5Jyk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kZWNsYXJlU2VydmljZXMoKTtcclxuICAgICAgICAgICAgICAgIGtvLnB1bmNoZXMuZW5hYmxlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBrby5hcHBseUJpbmRpbmdzKF90aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciBzaGVsbCA9IG5ldyBTaGVsbCgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2hlbGwgPSBzaGVsbC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICBzaGVsbC5sb2FkKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGtvLnRyYWNrKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRpID0gdGhpcy5kZWNsYXJlU2VydmljZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuZGVjbGFyZVNlcnZpY2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGkgPSBEZXBlbmRlbmN5SW5qZWN0b3IuZmFjdG9yeURlZmF1bHQoKTtcclxuICAgICAgICAgICAgZGkuc2V0KCdzdG9yYWdlJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFN0b3JhZ2UoKTsgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGRpLnNldCgndG9hc3RlcicsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBUb2FzdGVyKCk7IH0sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCB0aGlzLm9uRGV2aWNlUmVhZHksIGZhbHNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5yZWNlaXZlZEV2ZW50ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBFdmVudDogJyArIGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbjtcclxuICAgIH0pKEluamVjdGFibGUpO1xyXG4gICAgS25vY2tvdXRFbHNlLmluaXQoKTsgLy8ga25vY2tvdXQtZWxzZSAgICA6IGh0dHBzOi8vZ2l0aHViLmNvbS9icmlhbm1odW50L2tub2Nrb3V0LWVsc2VcclxuICAgIGtvLnB1bmNoZXMuZW5hYmxlQWxsKCk7IC8vIGtub2Nrb3V0LXB1bmNoZXMgOiBodHRwczovL2dpdGh1Yi5jb20vbWJlc3Qva25vY2tvdXQucHVuY2hlc1xyXG4gICAgZXhwb3J0cy5hcHAgPSBuZXcgQXBwbGljYXRpb24oKTtcclxuICAgIGV4cG9ydHMuYXBwLmluaXRpYWxpemUoKTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwcGxpY2F0aW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9BcHBsaWNhdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJyZWZlcmVuY2VzLmQudHNcIiAvPlxyXG52YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcclxuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XHJcbn07XHJcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCAnZGkvRGVwZW5kZW5jeUluamVjdGFibGUnXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIEluamVjdGFibGUpIHtcclxuICAgIHZhciBTaGVsbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICAgICAgX19leHRlbmRzKFNoZWxsLCBfc3VwZXIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIFNoZWxsKCkge1xyXG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZU1hcCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubWVudUlkID0gbnVsbDtcclxuICAgICAgICAgICAga28udHJhY2sodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFNoZWxsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcm91dGVzID0gdGhpcy5kZWNsYXJlUm91dGVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVNYXAgPSBFbnVtZXJhYmxlLmZyb20ocm91dGVzKS53aGVyZShmdW5jdGlvbiAocikgeyByZXR1cm4gci5uYW1lICE9IG51bGw7IH0pLnRvT2JqZWN0KGZ1bmN0aW9uIChyKSB7IHJldHVybiByLm5hbWU7IH0sIGZ1bmN0aW9uIChyKSB7IHJldHVybiByOyB9KTtcclxuICAgICAgICAgICAgcm91dGllKEVudW1lcmFibGUuZnJvbShyb3V0ZXMpLnRvT2JqZWN0KGZ1bmN0aW9uIChyKSB7IHJldHVybiByLnBhdGg7IH0sIGZ1bmN0aW9uIChyKSB7IHJldHVybiByLmhhbmRsZXI7IH0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBTaGVsbC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnI3NwbGFzaCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICByb3V0aWUod2luZG93LmxvY2F0aW9uLmhhc2gpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgU2hlbGwucHJvdG90eXBlLnRyYW5zaXQgPSBmdW5jdGlvbiAobmFtZSwgY29udGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnJvdXRlTWFwW25hbWVdLnBhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLmxvYWQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMubWVudUlkID0gbmFtZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFNoZWxsLnByb3RvdHlwZS5kZWNsYXJlUm91dGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdob21lJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiByZXF1aXJlKCdwYWdlL2hvbWUvSG9tZVBhZ2UnKS5mYWN0b3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdjogeyBsYWJlbDogJ0hvbWUnLCBpY29uOiAnZm9sZGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnRyYW5zaXQoJ2hvbWUnLCB7fSk7IH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHJlcXVpcmUoJ3BhZ2Uvbm90ZS9FZGl0UGFnZScpLmZhY3RvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudHJhbnNpdCgnZWRpdCcsIHt9KTsgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnZWRpdC86aWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gX3RoaXMudHJhbnNpdCgnZWRpdCcsIHsgaWQ6ICtpZCB9KTsgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBTaGVsbDtcclxuICAgIH0pKEluamVjdGFibGUpO1xyXG4gICAgcmV0dXJuIFNoZWxsO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2hlbGwuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL1NoZWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xyXG4gICAgdmFyIERlcGVuZGVuY3lJbmplY3RvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gRGVwZW5kZW5jeUluamVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VzID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVkX2luc3RhbmNlcyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBEZXBlbmRlbmN5SW5qZWN0b3IuZ2V0RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBEZXBlbmRlbmN5SW5qZWN0b3Iuc2V0RGVmYXVsdCA9IGZ1bmN0aW9uIChfZGVmYXVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0ID0gX2RlZmF1bHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBEZXBlbmRlbmN5SW5qZWN0b3IuZmFjdG9yeURlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0ID0gbmV3IERlcGVuZGVuY3lJbmplY3RvcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgRGVwZW5kZW5jeUluamVjdG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobmFtZSwgc2VydmljZSwgc2hhcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZXNbbmFtZV0gPSBzZXJ2aWNlO1xyXG4gICAgICAgICAgICBzZXJ2aWNlLl9zaGFyZWQgPSBzaGFyZWQgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgRGVwZW5kZW5jeUluamVjdG9yLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSwgc2hhcmVkKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXJ2aWNlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1NlcnZpY2UnICsgbmFtZSArICcgbm90IGZvdW5kLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlID0gdGhpcy5zZXJ2aWNlc1tuYW1lXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZXJ2aWNlID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlLl9zaGFyZWQgfHwgc2hhcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hhcmVkX2luc3RhbmNlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaGFyZWRfaW5zdGFuY2VzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hhcmVkX2luc3RhbmNlc1tuYW1lXSA9IHNlcnZpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBEZXBlbmRlbmN5SW5qZWN0b3I7XHJcbiAgICB9KSgpO1xyXG4gICAgcmV0dXJuIERlcGVuZGVuY3lJbmplY3RvcjtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURlcGVuZGVuY3lJbmplY3Rvci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZGkvRGVwZW5kZW5jeUluamVjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICcuL0RlcGVuZGVuY3lJbmplY3RvciddLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgRGVwZW5kZW5jeUluamVjdG9yKSB7XHJcbiAgICB2YXIgRGVwZW5kZW5jeUluamVjdGFibGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIERlcGVuZGVuY3lJbmplY3RhYmxlKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGVwZW5kZW5jeUluamVjdGFibGUucHJvdG90eXBlLCBcImRpXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2RpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEZXBlbmRlbmN5SW5qZWN0b3IuZ2V0RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGkgPSBkaTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERlcGVuZGVuY3lJbmplY3RhYmxlLnByb3RvdHlwZSwgXCJzdG9yYWdlXCIsIHtcclxuICAgICAgICAgICAgLy8gYXBwbGljYXRpb24gc2VydmljZXMgZ2V0dGVyc1xyXG4gICAgICAgICAgICAvL2dldCBhcGkoKSA6IEFkbWluQXBpIHtcclxuICAgICAgICAgICAgLy9cdHJldHVybiB0aGlzLmRpLmdldCgnYXBpJyk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpLmdldCgnc3RvcmFnZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGVwZW5kZW5jeUluamVjdGFibGUucHJvdG90eXBlLCBcInByZWZlcmVuY2VcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpLmdldCgncHJlZmVyZW5jZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGVwZW5kZW5jeUluamVjdGFibGUucHJvdG90eXBlLCBcInRvYXN0ZXJcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpLmdldCgndG9hc3RlcicpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gRGVwZW5kZW5jeUluamVjdGFibGU7XHJcbiAgICB9KSgpO1xyXG4gICAgcmV0dXJuIERlcGVuZGVuY3lJbmplY3RhYmxlO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGVwZW5kZW5jeUluamVjdGFibGUuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2RpL0RlcGVuZGVuY3lJbmplY3RhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3JlZmVyZW5jZXMuZC50c1wiIC8+XHJcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcclxuICAgIHZhciBUb2FzdGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBUb2FzdGVyKCkge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogalF1ZXJ5IEFqYXgg44Gu44Ko44Op44O844OP44Oz44OJ44Op44Go44GX44Gm5L2/44GI44KL44KI44GG44Oh44Oz44OQ6Zai5pWw44Go44GX44Gm5a6a576pXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBtZXNzYWdlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihtZXNzYWdlLCAn44Ko44Op44O8Jyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFRvYXN0ZXIucHJvdG90eXBlLnN1Y2Nlc3MgPSBmdW5jdGlvbiAobWVzc2FnZSwgdGl0bGUpIHtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MobWVzc2FnZSwgdGl0bGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVG9hc3Rlci5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uIChtZXNzYWdlLCB0aXRsZSkge1xyXG4gICAgICAgICAgICB0b2FzdHIuaW5mbyhtZXNzYWdlLCB0aXRsZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBUb2FzdGVyLnByb3RvdHlwZS53YXJuaW5nID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKG1lc3NhZ2UsIHRpdGxlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBUb2FzdGVyO1xyXG4gICAgfSkoKTtcclxuICAgIHJldHVybiBUb2FzdGVyO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VG9hc3Rlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc2VydmljZXMvVG9hc3Rlci5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xyXG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcclxufTtcclxuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICcuLi9QYWdlJywgJy4uLy4uL21vZGVsL05vdGUnXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIFBhZ2UsIE5vdGUpIHtcclxuICAgIHZhciBjb21wb25lbnRJZCA9ICdob21lLXBhZ2UnO1xyXG4gICAgdmFyIEhvbWVQYWdlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgICAgICBfX2V4dGVuZHMoSG9tZVBhZ2UsIF9zdXBlcik7XHJcbiAgICAgICAgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXQgPSBmdW5jdGlvbiAobm90ZSkge1xyXG4gICAgICAgICAgICAgICAgUGFnZS50cmFuc2ZlcignZWRpdC8nICsgbm90ZS5pZCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcclxuICAgICAgICAgICAga28udHJhY2sodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEhvbWVQYWdlLmZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UgPSBuZXcgSG9tZVBhZ2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEhvbWVQYWdlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldEFsbChOb3RlLnN0b3JhZ2VLZXkpLnRoZW4oZnVuY3Rpb24gKGl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ub3RlcyA9IGl0ZW1zLm1hcChOb3RlLmZhY3RvcnkpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLnRvYXN0ZXIuZXJyb3IpLmFsd2F5cyhmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sb2FkaW5nID0gZmFsc2U7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgSG9tZVBhZ2UucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgUGFnZS50cmFuc2ZlcignYWRkJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBIb21lUGFnZS5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIEhvbWVQYWdlO1xyXG4gICAgfSkoUGFnZSk7XHJcbiAgICBQYWdlLnJlZ2lzdGVyKGNvbXBvbmVudElkLCBIb21lUGFnZSwgcmVxdWlyZSgnLi9Ib21lUGFnZS5odG1sJykpO1xyXG4gICAgcmV0dXJuIEhvbWVQYWdlO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SG9tZVBhZ2UuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3BhZ2UvaG9tZS9Ib21lUGFnZS5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xyXG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcclxufTtcclxuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICdkaS9EZXBlbmRlbmN5SW5qZWN0YWJsZSddLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgSW5qZWN0YWJsZSkge1xyXG4gICAgdmFyIENvbXBvbmVudCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICAgICAgX19leHRlbmRzKENvbXBvbmVudCwgX3N1cGVyKTtcclxuICAgICAgICBmdW5jdGlvbiBDb21wb25lbnQoKSB7XHJcbiAgICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb21wb25lbnQucmVnaXN0ZXIgPSBmdW5jdGlvbiAobmFtZSwga2xhc3MsIHRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIobmFtZSwge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgdmlld01vZGVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXMgaW5zdGFuY2VvZiBrbGFzcyA/IHBhcmFtcyA6IGtvLnVud3JhcChwYXJhbXMub3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudDtcclxuICAgIH0pKEluamVjdGFibGUpO1xyXG4gICAgcmV0dXJuIENvbXBvbmVudDtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbXBvbmVudC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ29tcG9uZW50LmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XHJcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xyXG59O1xyXG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgJy4uL0NvbXBvbmVudCddLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgQ29tcG9uZW50KSB7XHJcbiAgICB2YXIgUGFnZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICAgICAgX19leHRlbmRzKFBhZ2UsIF9zdXBlcik7XHJcbiAgICAgICAgZnVuY3Rpb24gUGFnZSgpIHtcclxuICAgICAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmuODvOOCuOWQjeOCkuWPluW+l+OBmeOCi+ODoeOCveODg+ODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFBhZ2UucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0TmFtZSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oa44O844K444GU44Go44Gu44OG44Oz44OX44Os44O844OISUTjgpLlj5blvpfjgZnjgovjg6Hjgr3jg4Pjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBQYWdlLnByb3RvdHlwZS5nZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRUZW1wbGF0ZSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YG356e75b6M44Gr5ZG844Gz5Ye644GV44KM44KL44Kk44OZ44Oz44OI44Oh44K944OD44OJXHJcbiAgICAgICAgICogQHBhcmFtIGNvbnRleHRcclxuICAgICAgICAgKi9cclxuICAgICAgICBQYWdlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFBhZ2UuZmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWN0b3J5IG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQYWdlLnRyYW5zZmVyID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgICAgICByb3V0aWUodXJsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBQYWdlO1xyXG4gICAgfSkoQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBQYWdlO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGFnZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcGFnZS9QYWdlLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoZWFkZXIgY2xhc3M9XFxcImJhciBiYXItbmF2XFxcIj5cXHJcXG5cXHQ8aDEgY2xhc3M9XFxcInRpdGxlXFxcIj5TaW1wbGUgTm90ZTwvaDE+XFxyXFxuPC9oZWFkZXI+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuXFx0PHVsIGNsYXNzPVxcXCJ0YWJsZS12aWV3XFxcIiBkYXRhLWJpbmQ9XFxcImZvcmVhY2g6IG5vdGVzXFxcIj5cXHJcXG5cXHRcXHQ8bGkgY2xhc3M9XFxcInRhYmxlLXZpZXctY2VsbFxcXCI+XFxyXFxuXFx0XFx0XFx0PGEgY2xhc3M9XFxcIm5hdmlnYXRlLXJpZ2h0XFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LmVkaXRcXFwiPlxcclxcblxcdFxcdFxcdFxcdHt7IHRpdGxlIH19XFxyXFxuXFx0XFx0XFx0PC9hPlxcclxcblxcdFxcdDwvbGk+XFxyXFxuXFx0PC91bD5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48bmF2IGNsYXNzPVxcXCJiYXIgYmFyLXRhYlxcXCI+XFxyXFxuXFx0PGEgY2xhc3M9XFxcInRhYi1pdGVtXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBhZGRcXFwiPlxcclxcblxcdFxcdDxzcGFuIGNsYXNzPVxcXCJpY29uIGljb24tZWRpdFxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ0YWItbGFiZWxcXFwiPkNyZWF0ZSBOZXc8L3NwYW4+XFxyXFxuXFx0PC9hPlxcclxcbjwvbmF2PlwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wYWdlL2hvbWUvSG9tZVBhZ2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcclxuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XHJcbn07XHJcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCAnLi4vUGFnZScsICcuLi8uLi9tb2RlbC9Ob3RlJ10sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBQYWdlLCBOb3RlKSB7XHJcbiAgICB2YXIgY29tcG9uZW50SWQgPSAnZWRpdC1wYWdlJztcclxuICAgIHZhciBFZGl0UGFnZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICAgICAgX19leHRlbmRzKEVkaXRQYWdlLCBfc3VwZXIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIEVkaXRQYWdlKCkge1xyXG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcclxuICAgICAgICAgICAga28udHJhY2sodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEVkaXRQYWdlLmZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UgPSBuZXcgRWRpdFBhZ2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEVkaXRQYWdlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKGNvbnRleHQuaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KE5vdGUuc3RvcmFnZUtleSwgY29udGV4dC5pZCkudGhlbihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm5vdGUgPSBOb3RlLmZhY3RvcnkoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnRvYXN0ZXIuZXJyb3IpLmFsd2F5cyhmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sb2FkaW5nID0gZmFsc2U7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RlID0gbmV3IE5vdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgRWRpdFBhZ2UucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNhdmUoTm90ZS5zdG9yYWdlS2V5LCB0aGlzLm5vdGUpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudG9hc3Rlci5zdWNjZXNzKCfkv53lrZjjgZfjgb7jgZfjgZ8nKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmJhY2soKTtcclxuICAgICAgICAgICAgfSwgdGhpcy50b2FzdGVyLmVycm9yKS5hbHdheXMoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2F2aW5nID0gZmFsc2U7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgRWRpdFBhZ2UucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFBhZ2UudHJhbnNmZXIoJycpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgRWRpdFBhZ2UucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWNrKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBFZGl0UGFnZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoTm90ZS5zdG9yYWdlS2V5LCB0aGlzLm5vdGUuaWQpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudG9hc3Rlci5zdWNjZXNzKCfliYrpmaTjgZfjgb7jgZfjgZ8nKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmJhY2soKTtcclxuICAgICAgICAgICAgfSwgdGhpcy50b2FzdGVyLmVycm9yKS5hbHdheXMoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2F2aW5nID0gZmFsc2U7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgRWRpdFBhZ2UuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBFZGl0UGFnZTtcclxuICAgIH0pKFBhZ2UpO1xyXG4gICAgUGFnZS5yZWdpc3Rlcihjb21wb25lbnRJZCwgRWRpdFBhZ2UsIHJlcXVpcmUoJy4vRWRpdFBhZ2UuaHRtbCcpKTtcclxuICAgIHJldHVybiBFZGl0UGFnZTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVkaXRQYWdlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wYWdlL25vdGUvRWRpdFBhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoZWFkZXIgY2xhc3M9XFxcImJhciBiYXItbmF2XFxcIj5cXHJcXG5cXHQ8aDEgY2xhc3M9XFxcInRpdGxlXFxcIj5TaW1wbGUgTm90ZTwvaDE+XFxyXFxuPC9oZWFkZXI+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiY29udGVudC1wYWRkZWRcXFwiPlxcclxcblxcdFxcdDxmb3JtIGRhdGEtYmluZD1cXFwid2l0aDogbm90ZVxcXCI+XFxyXFxuXFx0XFx0XFx0PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLjgr/jgqTjg4jjg6tcXFwiIHZhbHVlPVxcXCJ7eyB0aXRsZSB9fVxcXCIvPlxcclxcblxcdFxcdFxcdDx0ZXh0YXJlYSByb3dzPVxcXCIxMFxcXCIgdmFsdWU9XFxcInt7IGJvZHkgfX1cXFwiPjwvdGV4dGFyZWE+XFxyXFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wb3NpdGl2ZSBidG4tYmxvY2tcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5zYXZlLCBkaXNhYmxlOiAkcGFyZW50LnNhdmluZ1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx05L+d5a2Y44GX44Gm6ZaJ44GY44KLIHt7I2lmICRwYXJlbnQuc2F2aW5nfX08aSBjbGFzcz1cXFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXFxcIj48L2k+e3svaWZ9fVxcclxcblxcdFxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcdDwvZm9ybT5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48bmF2IGNsYXNzPVxcXCJiYXIgYmFyLXRhYlxcXCI+XFxyXFxuXFx0PGEgY2xhc3M9XFxcInRhYi1pdGVtXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBjYW5jZWxcXFwiPlxcclxcblxcdFxcdDxzcGFuIGNsYXNzPVxcXCJpY29uIGljb24tbGVmdFxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ0YWItbGFiZWxcXFwiPkNhbmNlbDwvc3Bhbj5cXHJcXG5cXHQ8L2E+XFxyXFxuXFx0PGEgY2xhc3M9XFxcInRhYi1pdGVtXFxcIiBocmVmPVxcXCIjcmVtb3ZlTW9kYWxcXFwiPlxcclxcblxcdFxcdDxzcGFuIGNsYXNzPVxcXCJpY29uIGljb24tdHJhc2hcXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHQ8c3BhbiBjbGFzcz1cXFwidGFiLWxhYmVsXFxcIj5EZWxldGU8L3NwYW4+XFxyXFxuXFx0PC9hPlxcclxcbjwvbmF2PlxcclxcblxcclxcbjxkaXYgaWQ9XFxcInJlbW92ZU1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWxcXFwiPlxcclxcblxcdDxoZWFkZXIgY2xhc3M9XFxcImJhciBiYXItbmF2XFxcIj5cXHJcXG5cXHRcXHQ8YSBjbGFzcz1cXFwiaWNvbiBpY29uLWNsb3NlIHB1bGwtcmlnaHRcXFwiIGhyZWY9XFxcIiNyZW1vdmVNb2RhbFxcXCI+PC9hPlxcclxcblxcdFxcdDxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPuWJiumZpDwvaDE+XFxyXFxuXFx0PC9oZWFkZXI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuXFx0XFx0PHAgY2xhc3M9XFxcImNvbnRlbnQtcGFkZGVkXFxcIiBkYXRhLWJpbmQ9XFxcIndpdGg6IG5vdGVcXFwiPlxcclxcblxcdFxcdFxcdHt7IHRpdGxlIH19IOOCkuWJiumZpOOBl+OBvuOBmeOAgjxicj5cXHJcXG5cXHRcXHRcXHTjgojjgo3jgZfjgYTjgafjgZnjgYs/XFxyXFxuXFx0XFx0PC9wPlxcclxcblxcclxcblxcdFxcdDxmb3JtPlxcclxcblxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcG9zaXRpdmUgYnRuLWJsb2NrXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGRhdGEtYmluZD1cXFwiY2xpY2s6IHJlbW92ZSwgZGlzYWJsZTogc2F2aW5nXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHTjga/jgYQge3sjaWYgc2F2aW5nfX08aSBjbGFzcz1cXFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXFxcIj48L2k+e3svaWZ9fVxcclxcblxcdFxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcdFxcdDxhIGNsYXNzPVxcXCJidG5cXFwiIGhyZWY9XFxcIiNyZW1vdmVNb2RhbFxcXCI+44Kt44Oj44Oz44K744OrPC9hPlxcclxcblxcdFxcdDwvZm9ybT5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcGFnZS9ub3RlL0VkaXRQYWdlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xyXG4gICAgdmFyIExvY2FsU3RvcmFnZUFkYXB0ZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIExvY2FsU3RvcmFnZUFkYXB0ZXIoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIExvY2FsU3RvcmFnZUFkYXB0ZXIucHJvdG90eXBlLm1ha2VJbmRleCA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19sb2NhbF9pbmRleF8nICsgY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBpdGVtcyA9PT0gJ2FycmF5Jykge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBFbnVtZXJhYmxlLmZyb20oaXRlbXMpLm1heChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbVsnaWQnXTsgfSkgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfbG9jYWxfaW5kZXhfJyArIGNsYXNzTmFtZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VBZGFwdGVyLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNsYXNzTmFtZSkpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIExvY2FsU3RvcmFnZUFkYXB0ZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgaXRlbXMpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY2xhc3NOYW1lLCBKU09OLnN0cmluZ2lmeShpdGVtcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHVuZGVmaW5lZCDjgaDjgajjg5fjg63jg5Hjg4bjgqPjgZTjgajnnIHnlaXjgZXjgozjgabjgZfjgb7jgYbjga7jgacgbnVsbCDjgavnva7mj5tcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VBZGFwdGVyLnByb3RvdHlwZS5kb0FzeW5jID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlQWRhcHRlci5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uIChjbGFzc05hbWUsIGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGRmZCA9ICQuRGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5kb0FzeW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IF90aGlzLnJlYWQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCdpZCcpICYmIGl0ZW1bJ2lkJ10gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZCM44GYIElEIOOBruOCouOCpOODhuODoOOCkuS4iuabuOOBjVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvdmVyd3JpdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5zb21lKGZ1bmN0aW9uICh2LCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2Lmhhc093blByb3BlcnR5KCdpZCcpICYmIHZbJ2lkJ10gPT09IGl0ZW1bJ2lkJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJ3cml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW92ZXJ3cml0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1bJ2lkJ10gPSBfdGhpcy5tYWtlSW5kZXgoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX3RoaXMud3JpdGUoY2xhc3NOYW1lLCBpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBkZmQucmVzb2x2ZVdpdGgobnVsbCwgW2l0ZW1dKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZmQucHJvbWlzZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlQWRhcHRlci5wcm90b3R5cGUuc2F2ZUFsbCA9IGZ1bmN0aW9uIChjbGFzc05hbWUsIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBkZmQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9Bc3luYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSBfdGhpcy5yZWFkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2lkJykgJiYgaXRlbVsnaWQnXSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ19kZXN0cm95JykgJiYgaXRlbS5fZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YmK6Zmk44OV44Op44Kw44GM44Gk44GE44Gm44GE44Gf44KJ5YmK6ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5zb21lKGZ1bmN0aW9uICh2LCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2lkJykgJiYgdlsnaWQnXSA9PT0gaXRlbVsnaWQnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlkIzjgZggSUQg44Gu44Ki44Kk44OG44Og44KS5LiK5pu444GNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlcndyaXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5zb21lKGZ1bmN0aW9uICh2LCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2lkJykgJiYgdlsnaWQnXSA9PT0gaXRlbVsnaWQnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJ3cml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW92ZXJ3cml0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShpdGVtLmhhc093blByb3BlcnR5KCdfZGVzdHJveScpICYmIGl0ZW0uX2Rlc3Ryb3kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWydpZCddID0gX3RoaXMubWFrZUluZGV4KGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy53cml0ZShjbGFzc05hbWUsIGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIGRmZC5yZXNvbHZlV2l0aChudWxsLCBbaXRlbXNdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZmQucHJvbWlzZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlQWRhcHRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgaWQpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGRmZCA9ICQuRGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5kb0FzeW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gRW51bWVyYWJsZS5mcm9tKF90aGlzLnJlYWQoY2xhc3NOYW1lKSkuZmlyc3RPckRlZmF1bHQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW1bJ2lkJ10gPT09IGlkOyB9LCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGRmZC5yZXNvbHZlV2l0aChudWxsLCBbaXRlbV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRmZC5wcm9taXNlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VBZGFwdGVyLnByb3RvdHlwZS5nZXRBbGwgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBkZmQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9Bc3luYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSBfdGhpcy5yZWFkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBkZmQucmVzb2x2ZVdpdGgobnVsbCwgW2l0ZW1zXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGZkLnByb21pc2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIExvY2FsU3RvcmFnZUFkYXB0ZXIucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChjbGFzc05hbWUsIGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBkZmQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9Bc3luYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSBfdGhpcy5yZWFkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zb21lKGZ1bmN0aW9uICh2LCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2lkJykgJiYgdlsnaWQnXSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMud3JpdGUoY2xhc3NOYW1lLCBpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBkZmQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRmZC5wcm9taXNlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VBZGFwdGVyLnByb3RvdHlwZS5kZWxldGVBbGwgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBkZmQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9Bc3luYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgZGZkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZmQucHJvbWlzZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIExvY2FsU3RvcmFnZUFkYXB0ZXI7XHJcbiAgICB9KSgpO1xyXG4gICAgcmV0dXJuIExvY2FsU3RvcmFnZUFkYXB0ZXI7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb2NhbFN0b3JhZ2VBZGFwdGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zZXJ2aWNlcy9Mb2NhbFN0b3JhZ2VBZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcclxuICAgIHZhciBOb3RlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBOb3RlKGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGRhdGEgJiYgZGF0YS5pZCB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gZGF0YSAmJiBkYXRhLnRpdGxlIHx8ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBkYXRhICYmIGRhdGEuYm9keSB8fCAnJztcclxuICAgICAgICAgICAga28udHJhY2sodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE5vdGUuZmFjdG9yeSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm90ZShkYXRhKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE5vdGUuc3RvcmFnZUtleSA9ICdub3Rlcyc7XHJcbiAgICAgICAgcmV0dXJuIE5vdGU7XHJcbiAgICB9KSgpO1xyXG4gICAgcmV0dXJuIE5vdGU7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tb2RlbC9Ob3RlLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6Ii4uL3d3dy9qcy9pbmRleC5qcyJ9