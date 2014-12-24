/// <reference path="../references.d.ts" />

export = Toaster;

class Toaster {
	
	public success(title : string, message : string) {
		this.toast('success', title, message);
	}
	
	public info(title : string, message : string) {
		this.toast('info', title, message);
	}
	
	public warning(title : string, message : string) {
		this.toast('warning', title, message);
	}

	public danger(title : string, message : string) {
		this.toast('danger', title, message);
	}

	/**
	 * jQuery Ajax のエラーハンドラとして使えるようメンバ関数として定義
	 * @param message
	 */
	public error = (message : string) => {
		this.toast('danger', 'エラー', message, 10000);
	};
	
	private toast(priority:string, title:string, message:string, timeout?:number) {
		$.toaster({
			priority: priority,
			title: title,
			message: message,
			settings: {
				timeout: timeout || 1500
			}
		});
	}
	
}
