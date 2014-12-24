/// <reference path="../references.d.ts" />

export = Toaster;

class Toaster {
	
	public success(message:string, title?:string) {
		toastr.success(message, title);
	}
	
	public info(message : string, title?:string) {
		toastr.info(message, title);
	}
	
	public warning(message : string, title?:string) {
		toastr.warning(message, title);
	}

	/**
	 * jQuery Ajax のエラーハンドラとして使えるようメンバ関数として定義
	 * @param message
	 */
	public error = (message:string) => {
		toastr.error(message, 'エラー');
	};
	
}
