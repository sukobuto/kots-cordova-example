/// <reference path="../references.d.ts" />
export = Note;

class Note {
	
	public static storageKey = 'notes';
	
	public id:number;
	public title:string;
	public body:string;
	
	public static factory(data) {
		return new Note(data);
	}
	
	constructor(data?:any) {
		this.id = data && data.id || 0;
		this.title = data && data.title || '';
		this.body = data && data.body || '';
		ko.track(this);
	}
	
}