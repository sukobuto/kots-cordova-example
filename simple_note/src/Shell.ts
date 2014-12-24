/// <reference path="references.d.ts" />

import Injectable = require('di/DependencyInjectable');
import Page = require('page/Page');

export = Shell;

interface Route {
	name? : string;
	page? : () => Page;
	nav? : NavSetting;
	path : string;
	handler : (...params:any[]) => void;
}

interface NavSetting {
	label : string;
	icon : string;
}

class Shell extends Injectable {
	
	public routeMap : any = null;
	public page : Page = null;
	public menuId : string = null;

	constructor(){
		super();
		ko.track(this);
	}
	
	public initialize() : Shell {
		var routes = this.declareRoutes();
		this.routeMap = Enumerable.from(routes)
			.where(r => r.name != null)
			.toObject(r => r.name, r => r);
		routie(
			<{ [x: string]: Function; }>Enumerable.from(routes)
				.toObject(r => r.path, r => r.handler)
		);
		return this;
	}
	
	public load() {
		$('#splash').remove();
		routie(window.location.hash);
	}

	public transit(name : string, context : any) : void {
		this.page = this.routeMap[name].page();
		this.page.load(context);
		this.menuId = name;
	}
	
	private declareRoutes() : Route[] {
		return [
			{
				name: 'home',
				page: require('page/home/HomePage').factory,
				nav: { label: 'Home', icon: 'folder' },
				path: '',
				handler: () => this.transit('home', {})
			},
			{
				name: 'edit',
				page: require('page/note/EditPage').factory,
				path: 'add',
				handler: () => this.transit('edit', {})
			},
			{
				path: 'edit/:id',
				handler: (id) => this.transit('edit', { id: +id })
			},
		];
	}
}
