import DependencyInjector = require('./DependencyInjector');
import Storage = require('services/LocalStorageAdapter');
import Preference = require('../services/Preference');
import Toaster = require('../services/Toaster');
import Modal = require('../parts/modal/Modal');
export = DependencyInjectable;

class DependencyInjectable {

	private _di : DependencyInjector;

	get di() : DependencyInjector {
		if (!this._di) return DependencyInjector.getDefault();
		return this._di;
	}

	set di(di : DependencyInjector) {
		this._di = di;
	}

	// application services getters
	
	//get api() : AdminApi {
	//	return this.di.get('api');
	//}
	
	get storage():Storage {
		return this.di.get('storage');
	}
	
	get preference():Preference {
		return this.di.get('preference');
	}
	
	get toaster():Toaster {
		return this.di.get('toaster');
	}
}