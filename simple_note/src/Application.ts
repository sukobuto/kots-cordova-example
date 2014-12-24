/// <reference path="references.d.ts" />
import DependencyInjector = require('di/DependencyInjector');
import Injectable = require('di/DependencyInjectable');
import Shell = require('./Shell');
import Storage = require('services/LocalStorageAdapter');
import Toaster = require('services/Toaster');
import Preference = require('services/Preference');
import Modal = require('parts/modal/Modal');

class Application extends Injectable {
	
	public shell : Shell = null;
	
	constructor() {
		super();
		ko.track(this);
	}
	
	public initialize() {
		var di = this.declareServices();
		this.bindEvents();
	}

	public declareServices() : DependencyInjector {
		var di = DependencyInjector.factoryDefault();
		di.set('storage', () => new Storage(), true);
		di.set('toaster', () => new Toaster(), true);
		return di;
	}
	
	public bindEvents() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	}
	
	public onDeviceReady = () => {
		this.receivedEvent('deviceready');
		this.declareServices();
		ko.punches.enableAll();
		ko.applyBindings(this);
		var shell = new Shell();
		this.shell = shell.initialize();
		shell.load();
	};
	
	public receivedEvent(id) {
		console.log('Received Event: ' + id);
	}
}

KnockoutElse.init();  // knockout-else    : https://github.com/brianmhunt/knockout-else
ko.punches.enableAll(); // knockout-punches : https://github.com/mbest/knockout.punches

export var app = new Application();
app.initialize();
