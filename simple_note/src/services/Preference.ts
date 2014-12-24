/// <reference path="../references.d.ts" />
export = Preference;

class Preference {

	private data : {} = [];

	public load() : Preference {
		// todo load from database
		this.data['test'] = 'これはテストです';
		return this;
	}

	public save() : Preference {
		// todo save into database
		return this;
	}

	public get(key : string) : any {
		return this.data[key];
	}

	public set(key : string, value : any) : Preference {
		this.data[key] = value;
		return this;
	}

}