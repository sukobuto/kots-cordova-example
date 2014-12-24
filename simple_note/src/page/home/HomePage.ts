/// <reference path="../../references.d.ts" />
import Page = require('../Page');
import Note = require('../../model/Note');
export = HomePage;

var componentId = 'home-page';

class HomePage extends Page {
	
	public static instance : Page = null;
	public static factory() {
		if (this.instance != null) return this.instance;
		return this.instance = new HomePage();
	}
	
	public loading = false;
	public notes:Note[] = [];
	
	constructor() {
		super();
		this.componentId = componentId;
		ko.track(this);
	}
	
	public load(context) {
		this.loading = true;
		this.storage.getAll(Note.storageKey)
			.then((items:any[]) => {
				this.notes = items.map(Note.factory);
			}, this.toaster.error)
			.always(() => this.loading = false);
	}
	
	public edit = (note) => {
		Page.transfer('edit/' + note.id);
	};
	
	public add() {
		Page.transfer('add');
	} 
	
}

Page.register(componentId, HomePage, require('./HomePage.html'));