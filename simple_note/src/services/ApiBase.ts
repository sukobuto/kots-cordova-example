/// <reference path="../references.d.ts" />

export = ApiBase;

class ApiBase {
	
	public _token = "";
	
	public _preProcess = (response:any):any => {
		if (response.error) {
			if (console) console.error(response.error);
			return $.Deferred().rejectWith(response, [response.error]);
		}
		if (response.auth_required) {
			window.location.href = 'login';
			return false;
		} else {
			if (response._token) {
				this._token = response._token;
			}
			return response;
		}
	};
	
	public _communicationError(xhr, status, error):any {
		return $.Deferred().rejectWith(xhr, ['通信エラー:' + error]);
	}
	
	public _get(url : string, data? : any, callback? : () => void) : JQueryPromise<any> {
		if (!data) data = {};
		data._token = this._token;
		return $.ajax(url, { type: 'get', data: data, success: callback })
			.then(this._preProcess, this._communicationError);
	}

	/**
	 * GET リクエストを送信
	 */
	public _post(url : string, data : any, $files? : JQuery, callback? : (ApiResponse) => void) : JQueryPromise<any> {
		data = $.extend({ _token: this._token }, data);
		if ($files) {
			var dfd = $.Deferred();
			data['_response_as'] = 'text/html';
			$files.upload(url, data, function(response) {
				dfd.resolveWith(dfd, [response]);
				if (callback) callback(response);
			}, 'json');
			return dfd.then(this._preProcess, this._communicationError);
		} else {
			data['_response_as'] = 'application/json';
			return $.ajax(
				url,
				{
					type: 'post',
					data: data,
					success: callback
				}
			).then(this._preProcess, this._communicationError);
		}
	}
	
	public _serialize(data : any) {
		return ko.utils.stringifyJson(data, function(key, value) {
			// オブジェクト中の undefined が省略される対策
			var undefined;
			return value === undefined ? null : value;
		});
	}
	
}
