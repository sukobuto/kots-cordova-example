/// <reference path="../references.d.ts" />
export = StorageAdapter;

interface StorageAdapter {

	save(className:string, item:any):JQueryPromise<any>;
	saveAll(className:string, items:any[]):JQueryPromise<any[]>;
	get(className:string, id:number):JQueryPromise<any>;
	getAll(className:string):JQueryPromise<any[]>;
	delete(className:string, id:number):JQueryPromise<any>;
	deleteAll(className:string):JQueryPromise<any>;
	
}