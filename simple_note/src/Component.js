var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'di/DependencyInjectable'], function (require, exports, Injectable) {
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
});
//# sourceMappingURL=Component.js.map