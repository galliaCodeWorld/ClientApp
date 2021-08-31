export class WebApiType {
	constructor() {
		this.webApiId = 0;
		this.created  = null;
		this.name = "";
    this.clientId = null;
		this.base64Secret = "";
	}
	webApiId: number;
	created: Date | null;
	name: string;
	clientId: string | null;
	base64Secret: string;
}
