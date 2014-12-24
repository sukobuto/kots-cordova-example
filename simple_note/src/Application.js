var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'di/DependencyInjector', 'di/DependencyInjectable', './Shell', 'services/LocalStorageAdapter', 'services/Toaster'], function (require, exports, DependencyInjector, Injectable, Shell, Storage, Toaster) {
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
});
//# sourceMappingURL=Application.js.map