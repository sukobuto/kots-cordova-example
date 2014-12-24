define(["require", "exports"], function (require, exports) {
    var Preference = (function () {
        function Preference() {
            this.data = [];
        }
        Preference.prototype.load = function () {
            // todo load from database
            this.data['test'] = 'これはテストです';
            return this;
        };
        Preference.prototype.save = function () {
            // todo save into database
            return this;
        };
        Preference.prototype.get = function (key) {
            return this.data[key];
        };
        Preference.prototype.set = function (key, value) {
            this.data[key] = value;
            return this;
        };
        return Preference;
    })();
    return Preference;
});
//# sourceMappingURL=Preference.js.map