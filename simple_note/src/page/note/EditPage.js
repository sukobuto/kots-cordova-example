var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Page', '../../model/Note'], function (require, exports, Page, Note) {
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
    Page.register(componentId, EditPage, require('./EditPage.html'));
    return EditPage;
});
//# sourceMappingURL=EditPage.js.map