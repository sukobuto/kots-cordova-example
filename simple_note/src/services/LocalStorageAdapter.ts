/// <reference path="../references.d.ts" />
import StorageAdapter = require('./StorageAdapter');
export = LocalStorageAdapter;

class LocalStorageAdapter implements StorageAdapter {
	
	private makeIndex(className:string):number {
		var index = localStorage.getItem('_local_index_' + className);
		var items = localStorage.getItem(className);
		if (index) {
			index++;
		} else if (Array.isArray(items)) {
			index = Enumerable.from(items).max(item => item['id']) + 1;
		} else {
			index = 1;
		}
		localStorage.setItem('_local_index_' + className, index);
		return index;
	}
	
	private read(className) {
		var items = JSON.parse(localStorage.getItem(className));
		if (Array.isArray(items)) return items;
		return [];
	}
	
	private write(className, items) {
		localStorage.setItem(className, JSON.stringify(items, (key, value) => {
			// undefined だとプロパティごと省略されてしまうので null に置換
			if (typeof value === 'undefined') return null;
			return value;
		}));
	}
	
	private doAsync(callback:()=>void) {
		setTimeout(callback, 0);
	}
	
	public save(className, item) {
		var dfd = $.Deferred();
		this.doAsync(() => {
			var items = this.read(className);
			if (item.hasOwnProperty('id') && item['id'] > 0) {
				// 同じ ID のアイテムを上書き
				var overwrite = false;
				items.some((v, i) => {
					if (v.hasOwnProperty('id') && v['id'] === item['id']) {
						items[i] = item;
						overwrite = true;
					}
				});
				if (!overwrite) items.push(item);
			} else {
				item['id'] = this.makeIndex(className);
				items.push(item);
			}
			this.write(className, items);
			dfd.resolveWith(null, [item]);
		});
		return dfd.promise();
	}
	
	public saveAll(className, items) {
		var dfd = $.Deferred();
		this.doAsync(() => {
			var items = this.read(className);
			items.forEach((item) => {
				if (item.hasOwnProperty('id') && item['id'] > 0) {
					if (item.hasOwnProperty('_destroy') && item._destroy) {
						// 削除フラグがついていたら削除
						items.some((v, i) => {
							if (v.hasOwnProperty('id') && v['id'] === item['id']) {
								items.splice(i, 1);
							}
						});
					} else {
						// 同じ ID のアイテムを上書き
						var overwrite = false;
						items.some((v, i) => {
							if (v.hasOwnProperty('id') && v['id'] === item['id']) {
								items[i] = item;
								overwrite = true;
							}
						});
						if (!overwrite) items.push(item);
					}
				} else {
					if (!(item.hasOwnProperty('_destroy') && item._destroy)) {
						item['id'] = this.makeIndex(className);
						items.push(item);
					}
				}
			});
			this.write(className, items);
			dfd.resolveWith(null, [items]);
		});
		return dfd.promise();
	}
	
	public get(className, id) {
		var dfd = $.Deferred();
		this.doAsync(() => {
			var item = Enumerable.from(this.read(className))
				.firstOrDefault(item => item['id'] === id, null);
			dfd.resolveWith(null, [item]);
		});
		return dfd.promise();
	}
	
	public getAll(className) {
		var dfd = $.Deferred();
		this.doAsync(() => {
			var items = this.read(className);
			dfd.resolveWith(null, [items]);
		});
		return dfd.promise();
	}
	
	public delete(className, id) {
		var dfd = $.Deferred();
		this.doAsync(() => {
			var items = this.read(className);
			items.some((v, i) => {
				if (v.hasOwnProperty('id') && v['id'] === id) {
					items.splice(i, 1);
				}
			});
			this.write(className, items);
			dfd.resolve();
		});
		return dfd.promise();
	}
	
	public deleteAll(className) {
		var dfd = $.Deferred();
		this.doAsync(() => {
			localStorage.removeItem(className);
			dfd.resolve();
		});
		return dfd.promise();
	}
	
}
