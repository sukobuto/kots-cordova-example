define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=LocalStorageAdapter.js.map