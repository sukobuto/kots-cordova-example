/// <reference path="../references.d.ts" />
define(["require", "exports"], function (require, exports) {
    var Toaster = (function () {
        function Toaster() {
            var _this = this;
            /**
             * jQuery Ajax のエラーハンドラとして使えるようメンバ関数として定義
             * @param message
             */
            this.error = function (message) {
                _this.toast('danger', 'エラー', message, 10000);
            };
        }
        Toaster.prototype.success = function (title, message) {
            this.toast('success', title, message);
        };
        Toaster.prototype.info = function (title, message) {
            this.toast('info', title, message);
        };
        Toaster.prototype.warning = function (title, message) {
            this.toast('warning', title, message);
        };
        Toaster.prototype.danger = function (title, message) {
            this.toast('danger', title, message);
        };
        Toaster.prototype.toast = function (priority, title, message, timeout) {
            $.toaster({
                priority: priority,
                title: title,
                message: message,
                settings: {
                    timeout: timeout || 1500
                }
            });
        };
        return Toaster;
    })();
    return Toaster;
});
//# sourceMappingURL=Toaster.js.map