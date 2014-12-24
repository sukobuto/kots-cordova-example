var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Page', '../../model/Note'], function (require, exports, Page, Note) {
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
    Page.register(componentId, HomePage, require('./HomePage.html'));
    return HomePage;
});
//# sourceMappingURL=HomePage.js.map