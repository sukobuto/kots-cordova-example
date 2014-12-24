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
	            routes.forEach(function (r) { return page(r.path, r.handler); });
	            return this;
	        };
	        Shell.prototype.load = function () {
	            $('#splash').remove();
	            page(window.location.hash);
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
	                    handler: function (ctx) { return _this.transit('home', ctx); }
	                },
	                {
	                    name: 'edit',
	                    page: __webpack_require__(11).factory,
	                    path: 'add',
	                    handler: function (ctx) { return _this.transit('edit', ctx); }
	                },
	                {
	                    path: 'edit/:id',
	                    handler: function (ctx) { return _this.transit('edit', ctx); }
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
	            page(url);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjNmMzQ4NDYyN2FjOWVlOGFkMzgiLCJ3ZWJwYWNrOi8vLy4vQXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vU2hlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vZGkvRGVwZW5kZW5jeUluamVjdG9yLmpzIiwid2VicGFjazovLy8uL2RpL0RlcGVuZGVuY3lJbmplY3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL1RvYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZS9ob21lL0hvbWVQYWdlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZS9ob21lL0hvbWVQYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcGFnZS9ub3RlL0VkaXRQYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2Uvbm90ZS9FZGl0UGFnZS5odG1sIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0xvY2FsU3RvcmFnZUFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvTm90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMs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biBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDYzZjM0ODQ2MjdhYzllZThhZDM4XG4gKiovIiwidmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XHJcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBfXygpO1xyXG59O1xyXG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgJ2RpL0RlcGVuZGVuY3lJbmplY3RvcicsICdkaS9EZXBlbmRlbmN5SW5qZWN0YWJsZScsICcuL1NoZWxsJywgJ3NlcnZpY2VzL0xvY2FsU3RvcmFnZUFkYXB0ZXInLCAnc2VydmljZXMvVG9hc3RlciddLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgRGVwZW5kZW5jeUluamVjdG9yLCBJbmplY3RhYmxlLCBTaGVsbCwgU3RvcmFnZSwgVG9hc3Rlcikge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgICAgICBfX2V4dGVuZHMoQXBwbGljYXRpb24sIF9zdXBlcik7XHJcbiAgICAgICAgZnVuY3Rpb24gQXBwbGljYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNoZWxsID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5vbkRldmljZVJlYWR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVjZWl2ZWRFdmVudCgnZGV2aWNlcmVhZHknKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRlY2xhcmVTZXJ2aWNlcygpO1xyXG4gICAgICAgICAgICAgICAga28ucHVuY2hlcy5lbmFibGVBbGwoKTtcclxuICAgICAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ3MoX3RoaXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNoZWxsID0gbmV3IFNoZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zaGVsbCA9IHNoZWxsLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIHNoZWxsLmxvYWQoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAga28udHJhY2sodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGkgPSB0aGlzLmRlY2xhcmVTZXJ2aWNlcygpO1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5kZWNsYXJlU2VydmljZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBkaSA9IERlcGVuZGVuY3lJbmplY3Rvci5mYWN0b3J5RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkaS5zZXQoJ3N0b3JhZ2UnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgU3RvcmFnZSgpOyB9LCB0cnVlKTtcclxuICAgICAgICAgICAgZGkuc2V0KCd0b2FzdGVyJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFRvYXN0ZXIoKTsgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIHRoaXMub25EZXZpY2VSZWFkeSwgZmFsc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQXBwbGljYXRpb24ucHJvdG90eXBlLnJlY2VpdmVkRXZlbnQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIEV2ZW50OiAnICsgaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIEFwcGxpY2F0aW9uO1xyXG4gICAgfSkoSW5qZWN0YWJsZSk7XHJcbiAgICBLbm9ja291dEVsc2UuaW5pdCgpOyAvLyBrbm9ja291dC1lbHNlICAgIDogaHR0cHM6Ly9naXRodWIuY29tL2JyaWFubWh1bnQva25vY2tvdXQtZWxzZVxyXG4gICAga28ucHVuY2hlcy5lbmFibGVBbGwoKTsgLy8ga25vY2tvdXQtcHVuY2hlcyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYmVzdC9rbm9ja291dC5wdW5jaGVzXHJcbiAgICBleHBvcnRzLmFwcCA9IG5ldyBBcHBsaWNhdGlvbigpO1xyXG4gICAgZXhwb3J0cy5hcHAuaW5pdGlhbGl6ZSgpO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBwbGljYXRpb24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0FwcGxpY2F0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInJlZmVyZW5jZXMuZC50c1wiIC8+XHJcbnZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xyXG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcclxufTtcclxuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICdkaS9EZXBlbmRlbmN5SW5qZWN0YWJsZSddLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgSW5qZWN0YWJsZSkge1xyXG4gICAgdmFyIFNoZWxsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgICAgICBfX2V4dGVuZHMoU2hlbGwsIF9zdXBlcik7XHJcbiAgICAgICAgZnVuY3Rpb24gU2hlbGwoKSB7XHJcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlTWFwID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tZW51SWQgPSBudWxsO1xyXG4gICAgICAgICAgICBrby50cmFjayh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU2hlbGwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByb3V0ZXMgPSB0aGlzLmRlY2xhcmVSb3V0ZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZU1hcCA9IEVudW1lcmFibGUuZnJvbShyb3V0ZXMpLndoZXJlKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLm5hbWUgIT0gbnVsbDsgfSkudG9PYmplY3QoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIubmFtZTsgfSwgZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHI7IH0pO1xyXG4gICAgICAgICAgICByb3V0ZXMuZm9yRWFjaChmdW5jdGlvbiAocikgeyByZXR1cm4gcGFnZShyLnBhdGgsIHIuaGFuZGxlcik7IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIFNoZWxsLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjc3BsYXNoJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHBhZ2Uod2luZG93LmxvY2F0aW9uLmhhc2gpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgU2hlbGwucHJvdG90eXBlLnRyYW5zaXQgPSBmdW5jdGlvbiAobmFtZSwgY29udGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnJvdXRlTWFwW25hbWVdLnBhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLmxvYWQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMubWVudUlkID0gbmFtZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFNoZWxsLnByb3RvdHlwZS5kZWNsYXJlUm91dGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdob21lJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiByZXF1aXJlKCdwYWdlL2hvbWUvSG9tZVBhZ2UnKS5mYWN0b3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdjogeyBsYWJlbDogJ0hvbWUnLCBpY29uOiAnZm9sZGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChjdHgpIHsgcmV0dXJuIF90aGlzLnRyYW5zaXQoJ2hvbWUnLCBjdHgpOyB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiByZXF1aXJlKCdwYWdlL25vdGUvRWRpdFBhZ2UnKS5mYWN0b3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChjdHgpIHsgcmV0dXJuIF90aGlzLnRyYW5zaXQoJ2VkaXQnLCBjdHgpOyB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdlZGl0LzppZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGN0eCkgeyByZXR1cm4gX3RoaXMudHJhbnNpdCgnZWRpdCcsIGN0eCk7IH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gU2hlbGw7XHJcbiAgICB9KShJbmplY3RhYmxlKTtcclxuICAgIHJldHVybiBTaGVsbDtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNoZWxsLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9TaGVsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcclxuICAgIHZhciBEZXBlbmRlbmN5SW5qZWN0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIERlcGVuZGVuY3lJbmplY3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZF9pbnN0YW5jZXMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGVwZW5kZW5jeUluamVjdG9yLmdldERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgRGVwZW5kZW5jeUluamVjdG9yLnNldERlZmF1bHQgPSBmdW5jdGlvbiAoX2RlZmF1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVmYXVsdCA9IF9kZWZhdWx0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgRGVwZW5kZW5jeUluamVjdG9yLmZhY3RvcnlEZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdCA9IG5ldyBEZXBlbmRlbmN5SW5qZWN0b3IoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIERlcGVuZGVuY3lJbmplY3Rvci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG5hbWUsIHNlcnZpY2UsIHNoYXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VzW25hbWVdID0gc2VydmljZTtcclxuICAgICAgICAgICAgc2VydmljZS5fc2hhcmVkID0gc2hhcmVkIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIERlcGVuZGVuY3lJbmplY3Rvci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUsIHNoYXJlZCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VydmljZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdTZXJ2aWNlJyArIG5hbWUgKyAnIG5vdCBmb3VuZC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc2VydmljZSA9IHRoaXMuc2VydmljZXNbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VydmljZSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VydmljZS5fc2hhcmVkIHx8IHNoYXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoYXJlZF9pbnN0YW5jZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hhcmVkX2luc3RhbmNlc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYXJlZF9pbnN0YW5jZXNbbmFtZV0gPSBzZXJ2aWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gRGVwZW5kZW5jeUluamVjdG9yO1xyXG4gICAgfSkoKTtcclxuICAgIHJldHVybiBEZXBlbmRlbmN5SW5qZWN0b3I7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1EZXBlbmRlbmN5SW5qZWN0b3IuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2RpL0RlcGVuZGVuY3lJbmplY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCAnLi9EZXBlbmRlbmN5SW5qZWN0b3InXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIERlcGVuZGVuY3lJbmplY3Rvcikge1xyXG4gICAgdmFyIERlcGVuZGVuY3lJbmplY3RhYmxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBEZXBlbmRlbmN5SW5qZWN0YWJsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERlcGVuZGVuY3lJbmplY3RhYmxlLnByb3RvdHlwZSwgXCJkaVwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGVwZW5kZW5jeUluamVjdG9yLmdldERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kaTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RpID0gZGk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEZXBlbmRlbmN5SW5qZWN0YWJsZS5wcm90b3R5cGUsIFwic3RvcmFnZVwiLCB7XHJcbiAgICAgICAgICAgIC8vIGFwcGxpY2F0aW9uIHNlcnZpY2VzIGdldHRlcnNcclxuICAgICAgICAgICAgLy9nZXQgYXBpKCkgOiBBZG1pbkFwaSB7XHJcbiAgICAgICAgICAgIC8vXHRyZXR1cm4gdGhpcy5kaS5nZXQoJ2FwaScpO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaS5nZXQoJ3N0b3JhZ2UnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERlcGVuZGVuY3lJbmplY3RhYmxlLnByb3RvdHlwZSwgXCJwcmVmZXJlbmNlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaS5nZXQoJ3ByZWZlcmVuY2UnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERlcGVuZGVuY3lJbmplY3RhYmxlLnByb3RvdHlwZSwgXCJ0b2FzdGVyXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaS5nZXQoJ3RvYXN0ZXInKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIERlcGVuZGVuY3lJbmplY3RhYmxlO1xyXG4gICAgfSkoKTtcclxuICAgIHJldHVybiBEZXBlbmRlbmN5SW5qZWN0YWJsZTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURlcGVuZGVuY3lJbmplY3RhYmxlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9kaS9EZXBlbmRlbmN5SW5qZWN0YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9yZWZlcmVuY2VzLmQudHNcIiAvPlxyXG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcbiAgICB2YXIgVG9hc3RlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gVG9hc3RlcigpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIGpRdWVyeSBBamF4IOOBruOCqOODqeODvOODj+ODs+ODieODqeOBqOOBl+OBpuS9v+OBiOOCi+OCiOOBhuODoeODs+ODkOmWouaVsOOBqOOBl+OBpuWumue+qVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gbWVzc2FnZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IobWVzc2FnZSwgJ+OCqOODqeODvCcpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBUb2FzdGVyLnByb3RvdHlwZS5zdWNjZXNzID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKG1lc3NhZ2UsIHRpdGxlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFRvYXN0ZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAobWVzc2FnZSwgdGl0bGUpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmluZm8obWVzc2FnZSwgdGl0bGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVG9hc3Rlci5wcm90b3R5cGUud2FybmluZyA9IGZ1bmN0aW9uIChtZXNzYWdlLCB0aXRsZSkge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhtZXNzYWdlLCB0aXRsZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gVG9hc3RlcjtcclxuICAgIH0pKCk7XHJcbiAgICByZXR1cm4gVG9hc3RlcjtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRvYXN0ZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NlcnZpY2VzL1RvYXN0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcclxuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XHJcbn07XHJcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCAnLi4vUGFnZScsICcuLi8uLi9tb2RlbC9Ob3RlJ10sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBQYWdlLCBOb3RlKSB7XHJcbiAgICB2YXIgY29tcG9uZW50SWQgPSAnaG9tZS1wYWdlJztcclxuICAgIHZhciBIb21lUGFnZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICAgICAgX19leHRlbmRzKEhvbWVQYWdlLCBfc3VwZXIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0ID0gZnVuY3Rpb24gKG5vdGUpIHtcclxuICAgICAgICAgICAgICAgIFBhZ2UudHJhbnNmZXIoJ2VkaXQvJyArIG5vdGUuaWQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudElkID0gY29tcG9uZW50SWQ7XHJcbiAgICAgICAgICAgIGtvLnRyYWNrKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBIb21lUGFnZS5mYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlID0gbmV3IEhvbWVQYWdlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBIb21lUGFnZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXRBbGwoTm90ZS5zdG9yYWdlS2V5KS50aGVuKGZ1bmN0aW9uIChpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubm90ZXMgPSBpdGVtcy5tYXAoTm90ZS5mYWN0b3J5KTtcclxuICAgICAgICAgICAgfSwgdGhpcy50b2FzdGVyLmVycm9yKS5hbHdheXMoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubG9hZGluZyA9IGZhbHNlOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEhvbWVQYWdlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFBhZ2UudHJhbnNmZXIoJ2FkZCcpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgSG9tZVBhZ2UuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBIb21lUGFnZTtcclxuICAgIH0pKFBhZ2UpO1xyXG4gICAgUGFnZS5yZWdpc3Rlcihjb21wb25lbnRJZCwgSG9tZVBhZ2UsIHJlcXVpcmUoJy4vSG9tZVBhZ2UuaHRtbCcpKTtcclxuICAgIHJldHVybiBIb21lUGFnZTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhvbWVQYWdlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wYWdlL2hvbWUvSG9tZVBhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgX19leHRlbmRzID0gdGhpcy5fX2V4dGVuZHMgfHwgZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcclxuICAgIGQucHJvdG90eXBlID0gbmV3IF9fKCk7XHJcbn07XHJcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCAnZGkvRGVwZW5kZW5jeUluamVjdGFibGUnXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIEluamVjdGFibGUpIHtcclxuICAgIHZhciBDb21wb25lbnQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgICAgIF9fZXh0ZW5kcyhDb21wb25lbnQsIF9zdXBlcik7XHJcbiAgICAgICAgZnVuY3Rpb24gQ29tcG9uZW50KCkge1xyXG4gICAgICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29tcG9uZW50LnJlZ2lzdGVyID0gZnVuY3Rpb24gKG5hbWUsIGtsYXNzLCB0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKG5hbWUsIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgICAgICAgICAgICAgIHZpZXdNb2RlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zIGluc3RhbmNlb2Yga2xhc3MgPyBwYXJhbXMgOiBrby51bndyYXAocGFyYW1zLm9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnQ7XHJcbiAgICB9KShJbmplY3RhYmxlKTtcclxuICAgIHJldHVybiBDb21wb25lbnQ7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21wb25lbnQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NvbXBvbmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xyXG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcclxufTtcclxuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICcuLi9Db21wb25lbnQnXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIENvbXBvbmVudCkge1xyXG4gICAgdmFyIFBhZ2UgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgICAgIF9fZXh0ZW5kcyhQYWdlLCBfc3VwZXIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5rjg7zjgrjlkI3jgpLlj5blvpfjgZnjgovjg6Hjgr3jg4Pjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBQYWdlLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldE5hbWUgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmuODvOOCuOOBlOOBqOOBruODhuODs+ODl+ODrOODvOODiElE44KS5Y+W5b6X44GZ44KL44Oh44K944OD44OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUGFnZS5wcm90b3R5cGUuZ2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0VGVtcGxhdGUgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmBt+enu+W+jOOBq+WRvOOBs+WHuuOBleOCjOOCi+OCpOODmeODs+ODiOODoeOCveODg+ODiVxyXG4gICAgICAgICAqIEBwYXJhbSBjb250ZXh0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgUGFnZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQYWdlLmZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmFjdG9yeSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgUGFnZS50cmFuc2ZlciA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICAgICAgcGFnZSh1cmwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIFBhZ2U7XHJcbiAgICB9KShDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFBhZ2U7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1QYWdlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wYWdlL1BhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGhlYWRlciBjbGFzcz1cXFwiYmFyIGJhci1uYXZcXFwiPlxcclxcblxcdDxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPlNpbXBsZSBOb3RlPC9oMT5cXHJcXG48L2hlYWRlcj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG5cXHQ8dWwgY2xhc3M9XFxcInRhYmxlLXZpZXdcXFwiIGRhdGEtYmluZD1cXFwiZm9yZWFjaDogbm90ZXNcXFwiPlxcclxcblxcdFxcdDxsaSBjbGFzcz1cXFwidGFibGUtdmlldy1jZWxsXFxcIj5cXHJcXG5cXHRcXHRcXHQ8YSBjbGFzcz1cXFwibmF2aWdhdGUtcmlnaHRcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQuZWRpdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0e3sgdGl0bGUgfX1cXHJcXG5cXHRcXHRcXHQ8L2E+XFxyXFxuXFx0XFx0PC9saT5cXHJcXG5cXHQ8L3VsPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxuYXYgY2xhc3M9XFxcImJhciBiYXItdGFiXFxcIj5cXHJcXG5cXHQ8YSBjbGFzcz1cXFwidGFiLWl0ZW1cXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGFkZFxcXCI+XFxyXFxuXFx0XFx0PHNwYW4gY2xhc3M9XFxcImljb24gaWNvbi1lZGl0XFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0PHNwYW4gY2xhc3M9XFxcInRhYi1sYWJlbFxcXCI+Q3JlYXRlIE5ldzwvc3Bhbj5cXHJcXG5cXHQ8L2E+XFxyXFxuPC9uYXY+XCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3BhZ2UvaG9tZS9Ib21lUGFnZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfX2V4dGVuZHMgPSB0aGlzLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xyXG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcclxufTtcclxuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICcuLi9QYWdlJywgJy4uLy4uL21vZGVsL05vdGUnXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIFBhZ2UsIE5vdGUpIHtcclxuICAgIHZhciBjb21wb25lbnRJZCA9ICdlZGl0LXBhZ2UnO1xyXG4gICAgdmFyIEVkaXRQYWdlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgICAgICBfX2V4dGVuZHMoRWRpdFBhZ2UsIF9zdXBlcik7XHJcbiAgICAgICAgZnVuY3Rpb24gRWRpdFBhZ2UoKSB7XHJcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub3RlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xyXG4gICAgICAgICAgICBrby50cmFjayh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRWRpdFBhZ2UuZmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZSA9IG5ldyBFZGl0UGFnZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgRWRpdFBhZ2UucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dC5pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoTm90ZS5zdG9yYWdlS2V5LCBjb250ZXh0LmlkKS50aGVuKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubm90ZSA9IE5vdGUuZmFjdG9yeShpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMudG9hc3Rlci5lcnJvcikuYWx3YXlzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmxvYWRpbmcgPSBmYWxzZTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGUgPSBuZXcgTm90ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBFZGl0UGFnZS5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2F2ZShOb3RlLnN0b3JhZ2VLZXksIHRoaXMubm90ZSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50b2FzdGVyLnN1Y2Nlc3MoJ+S/neWtmOOBl+OBvuOBl+OBnycpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYmFjaygpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLnRvYXN0ZXIuZXJyb3IpLmFsd2F5cyhmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zYXZpbmcgPSBmYWxzZTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBFZGl0UGFnZS5wcm90b3R5cGUuYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgUGFnZS50cmFuc2ZlcignJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBFZGl0UGFnZS5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEVkaXRQYWdlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZShOb3RlLnN0b3JhZ2VLZXksIHRoaXMubm90ZS5pZCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50b2FzdGVyLnN1Y2Nlc3MoJ+WJiumZpOOBl+OBvuOBl+OBnycpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYmFjaygpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLnRvYXN0ZXIuZXJyb3IpLmFsd2F5cyhmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zYXZpbmcgPSBmYWxzZTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBFZGl0UGFnZS5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIEVkaXRQYWdlO1xyXG4gICAgfSkoUGFnZSk7XHJcbiAgICBQYWdlLnJlZ2lzdGVyKGNvbXBvbmVudElkLCBFZGl0UGFnZSwgcmVxdWlyZSgnLi9FZGl0UGFnZS5odG1sJykpO1xyXG4gICAgcmV0dXJuIEVkaXRQYWdlO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RWRpdFBhZ2UuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3BhZ2Uvbm90ZS9FZGl0UGFnZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGhlYWRlciBjbGFzcz1cXFwiYmFyIGJhci1uYXZcXFwiPlxcclxcblxcdDxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPlNpbXBsZSBOb3RlPC9oMT5cXHJcXG48L2hlYWRlcj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXBhZGRlZFxcXCI+XFxyXFxuXFx0XFx0PGZvcm0gZGF0YS1iaW5kPVxcXCJ3aXRoOiBub3RlXFxcIj5cXHJcXG5cXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIuOCv+OCpOODiOODq1xcXCIgdmFsdWU9XFxcInt7IHRpdGxlIH19XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHRleHRhcmVhIHJvd3M9XFxcIjEwXFxcIiB2YWx1ZT1cXFwie3sgYm9keSB9fVxcXCI+PC90ZXh0YXJlYT5cXHJcXG5cXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXBvc2l0aXZlIGJ0bi1ibG9ja1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LnNhdmUsIGRpc2FibGU6ICRwYXJlbnQuc2F2aW5nXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHTkv53lrZjjgZfjgabplonjgZjjgosge3sjaWYgJHBhcmVudC5zYXZpbmd9fTxpIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cXFwiPjwvaT57ey9pZn19XFxyXFxuXFx0XFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFx0PC9mb3JtPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxuYXYgY2xhc3M9XFxcImJhciBiYXItdGFiXFxcIj5cXHJcXG5cXHQ8YSBjbGFzcz1cXFwidGFiLWl0ZW1cXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGNhbmNlbFxcXCI+XFxyXFxuXFx0XFx0PHNwYW4gY2xhc3M9XFxcImljb24gaWNvbi1sZWZ0XFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0PHNwYW4gY2xhc3M9XFxcInRhYi1sYWJlbFxcXCI+Q2FuY2VsPC9zcGFuPlxcclxcblxcdDwvYT5cXHJcXG5cXHQ8YSBjbGFzcz1cXFwidGFiLWl0ZW1cXFwiIGhyZWY9XFxcIiNyZW1vdmVNb2RhbFxcXCI+XFxyXFxuXFx0XFx0PHNwYW4gY2xhc3M9XFxcImljb24gaWNvbi10cmFzaFxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ0YWItbGFiZWxcXFwiPkRlbGV0ZTwvc3Bhbj5cXHJcXG5cXHQ8L2E+XFxyXFxuPC9uYXY+XFxyXFxuXFxyXFxuPGRpdiBpZD1cXFwicmVtb3ZlTW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbFxcXCI+XFxyXFxuXFx0PGhlYWRlciBjbGFzcz1cXFwiYmFyIGJhci1uYXZcXFwiPlxcclxcblxcdFxcdDxhIGNsYXNzPVxcXCJpY29uIGljb24tY2xvc2UgcHVsbC1yaWdodFxcXCIgaHJlZj1cXFwiI3JlbW92ZU1vZGFsXFxcIj48L2E+XFxyXFxuXFx0XFx0PGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCI+5YmK6ZmkPC9oMT5cXHJcXG5cXHQ8L2hlYWRlcj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG5cXHRcXHQ8cCBjbGFzcz1cXFwiY29udGVudC1wYWRkZWRcXFwiIGRhdGEtYmluZD1cXFwid2l0aDogbm90ZVxcXCI+XFxyXFxuXFx0XFx0XFx0e3sgdGl0bGUgfX0g44KS5YmK6Zmk44GX44G+44GZ44CCPGJyPlxcclxcblxcdFxcdFxcdOOCiOOCjeOBl+OBhOOBp+OBmeOBiz9cXHJcXG5cXHRcXHQ8L3A+XFxyXFxuXFxyXFxuXFx0XFx0PGZvcm0+XFxyXFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wb3NpdGl2ZSBidG4tYmxvY2tcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ZGF0YS1iaW5kPVxcXCJjbGljazogcmVtb3ZlLCBkaXNhYmxlOiBzYXZpbmdcXFwiPlxcclxcblxcdFxcdFxcdFxcdOOBr+OBhCB7eyNpZiBzYXZpbmd9fTxpIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cXFwiPjwvaT57ey9pZn19XFxyXFxuXFx0XFx0XFx0PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0PGEgY2xhc3M9XFxcImJ0blxcXCIgaHJlZj1cXFwiI3JlbW92ZU1vZGFsXFxcIj7jgq3jg6Pjg7Pjgrvjg6s8L2E+XFxyXFxuXFx0XFx0PC9mb3JtPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wYWdlL25vdGUvRWRpdFBhZ2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcbiAgICB2YXIgTG9jYWxTdG9yYWdlQWRhcHRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gTG9jYWxTdG9yYWdlQWRhcHRlcigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlQWRhcHRlci5wcm90b3R5cGUubWFrZUluZGV4ID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX2xvY2FsX2luZGV4XycgKyBjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGl0ZW1zID09PSAnYXJyYXknKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IEVudW1lcmFibGUuZnJvbShpdGVtcykubWF4KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtWydpZCddOyB9KSArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19sb2NhbF9pbmRleF8nICsgY2xhc3NOYW1lLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIExvY2FsU3RvcmFnZUFkYXB0ZXIucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY2xhc3NOYW1lKSk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlQWRhcHRlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoY2xhc3NOYW1lLCBpdGVtcykge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjbGFzc05hbWUsIEpTT04uc3RyaW5naWZ5KGl0ZW1zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdW5kZWZpbmVkIOOBoOOBqOODl+ODreODkeODhuOCo+OBlOOBqOecgeeVpeOBleOCjOOBpuOBl+OBvuOBhuOBruOBpyBudWxsIOOBq+e9ruaPm1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIExvY2FsU3RvcmFnZUFkYXB0ZXIucHJvdG90eXBlLmRvQXN5bmMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChjYWxsYmFjaywgMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VBZGFwdGVyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZGZkID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRvQXN5bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gX3RoaXMucmVhZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2lkJykgJiYgaXRlbVsnaWQnXSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlkIzjgZggSUQg44Gu44Ki44Kk44OG44Og44KS5LiK5pu444GNXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG92ZXJ3cml0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNvbWUoZnVuY3Rpb24gKHYsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2lkJykgJiYgdlsnaWQnXSA9PT0gaXRlbVsnaWQnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcndyaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3ZlcndyaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVsnaWQnXSA9IF90aGlzLm1ha2VJbmRleChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy53cml0ZShjbGFzc05hbWUsIGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIGRmZC5yZXNvbHZlV2l0aChudWxsLCBbaXRlbV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRmZC5wcm9taXNlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VBZGFwdGVyLnByb3RvdHlwZS5zYXZlQWxsID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgaXRlbXMpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGRmZCA9ICQuRGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5kb0FzeW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IF90aGlzLnJlYWQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgnaWQnKSAmJiBpdGVtWydpZCddID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgnX2Rlc3Ryb3knKSAmJiBpdGVtLl9kZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDliYrpmaTjg5Xjg6njgrDjgYzjgaTjgYTjgabjgYTjgZ/jgonliYrpmaRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNvbWUoZnVuY3Rpb24gKHYsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgnaWQnKSAmJiB2WydpZCddID09PSBpdGVtWydpZCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWQjOOBmCBJRCDjga7jgqLjgqTjg4bjg6DjgpLkuIrmm7jjgY1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdmVyd3JpdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNvbWUoZnVuY3Rpb24gKHYsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgnaWQnKSAmJiB2WydpZCddID09PSBpdGVtWydpZCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcndyaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3ZlcndyaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGl0ZW0uaGFzT3duUHJvcGVydHkoJ19kZXN0cm95JykgJiYgaXRlbS5fZGVzdHJveSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bJ2lkJ10gPSBfdGhpcy5tYWtlSW5kZXgoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIF90aGlzLndyaXRlKGNsYXNzTmFtZSwgaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgZGZkLnJlc29sdmVXaXRoKG51bGwsIFtpdGVtc10pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRmZC5wcm9taXNlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VBZGFwdGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoY2xhc3NOYW1lLCBpZCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZGZkID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRvQXN5bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBFbnVtZXJhYmxlLmZyb20oX3RoaXMucmVhZChjbGFzc05hbWUpKS5maXJzdE9yRGVmYXVsdChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbVsnaWQnXSA9PT0gaWQ7IH0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgZGZkLnJlc29sdmVXaXRoKG51bGwsIFtpdGVtXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGZkLnByb21pc2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIExvY2FsU3RvcmFnZUFkYXB0ZXIucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGRmZCA9ICQuRGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5kb0FzeW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IF90aGlzLnJlYWQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIGRmZC5yZXNvbHZlV2l0aChudWxsLCBbaXRlbXNdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZmQucHJvbWlzZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlQWRhcHRlci5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgaWQpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGRmZCA9ICQuRGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5kb0FzeW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IF90aGlzLnJlYWQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNvbWUoZnVuY3Rpb24gKHYsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgnaWQnKSAmJiB2WydpZCddID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy53cml0ZShjbGFzc05hbWUsIGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIGRmZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGZkLnByb21pc2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIExvY2FsU3RvcmFnZUFkYXB0ZXIucHJvdG90eXBlLmRlbGV0ZUFsbCA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGRmZCA9ICQuRGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5kb0FzeW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBkZmQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRmZC5wcm9taXNlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gTG9jYWxTdG9yYWdlQWRhcHRlcjtcclxuICAgIH0pKCk7XHJcbiAgICByZXR1cm4gTG9jYWxTdG9yYWdlQWRhcHRlcjtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxvY2FsU3RvcmFnZUFkYXB0ZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NlcnZpY2VzL0xvY2FsU3RvcmFnZUFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xyXG4gICAgdmFyIE5vdGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIE5vdGUoZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gZGF0YSAmJiBkYXRhLmlkIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBkYXRhICYmIGRhdGEudGl0bGUgfHwgJyc7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IGRhdGEgJiYgZGF0YS5ib2R5IHx8ICcnO1xyXG4gICAgICAgICAgICBrby50cmFjayh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTm90ZS5mYWN0b3J5ID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb3RlKGRhdGEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTm90ZS5zdG9yYWdlS2V5ID0gJ25vdGVzJztcclxuICAgICAgICByZXR1cm4gTm90ZTtcclxuICAgIH0pKCk7XHJcbiAgICByZXR1cm4gTm90ZTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vdGUuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21vZGVsL05vdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiLi4vd3d3L2pzL2luZGV4LmpzIn0=