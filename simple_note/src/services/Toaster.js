/// <reference path="../references.d.ts" />
define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=Toaster.js.map