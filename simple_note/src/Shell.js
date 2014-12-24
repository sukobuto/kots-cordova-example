/// <reference path="references.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'di/DependencyInjectable'], function (require, exports, Injectable) {
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
                    page: require('page/home/HomePage').factory,
                    nav: { label: 'Home', icon: 'folder' },
                    path: '',
                    handler: function () { return _this.transit('home', {}); }
                },
                {
                    name: 'edit',
                    page: require('page/note/EditPage').factory,
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
});
//# sourceMappingURL=Shell.js.map