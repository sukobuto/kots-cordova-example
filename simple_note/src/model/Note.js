define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=Note.js.map