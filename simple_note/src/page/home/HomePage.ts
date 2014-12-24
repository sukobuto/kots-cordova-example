/// <reference path="../../references.d.ts" />
import Page = require('../Page');
export = HomePage;

var componentId = 'home-page';

class HomePage extends Page {
	
	public static instance : Page = null;
	public static factory() {
		if (this.instance != null) return this.instance;
		return this.instance = new HomePage();
	}
	
	public notes:
	
	constructor() {
		super();
		this.componentId = componentId;
		ko.track(this);
	}
}

Page.register(componentId, HomePage, require('./HomePage.html'));
