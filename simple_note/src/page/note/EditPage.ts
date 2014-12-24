/// <reference path="../../references.d.ts" />
import Page = require('../Page');
import Note = require('../../model/Note');
export = EditPage;

var componentId = 'edit-page';

class EditPage extends Page {
	
	public static instance : Page = null;
	public static factory() {
		if (this.instance != null) return this.instance;
		return this.instance = new EditPage();
	}
	
	public loading = false;
	public saving = false;
	public note = null;
	
	constructor() {
		super();
		this.componentId = componentId;
		ko.track(this);
	}
	
	public load(context) {
		if (context.id) {
			this.loading = true;
			this.storage.get(Note.storageKey, context.id)
				.then(item => {
					this.note = Note.factory(item);
				}, this.toaster.error)
				.always(() => this.loading = false);
		} else {
			this.note = new Note();
		}
	}
	
	public save() {
		this.saving = true;
		this.storage.save(Note.storageKey, this.note)
			.then(() => {
				this.toaster.success('保存しました');
				this.back();
			}, this.toaster.error)
			.always(() => this.saving = false);
	}
	
	public back() {
		Page.transfer('');
	}
	
	public cancel() {
		this.back();
	}
	
	public remove() {
		this.saving = true;
		this.storage.delete(Note.storageKey, this.note.id)
			.then(() => {
				this.toaster.success('削除しました');
				this.back();
			}, this.toaster.error)
			.always(() => this.saving = false);
	}
	
}

Page.register(componentId, EditPage, require('./EditPage.html'));