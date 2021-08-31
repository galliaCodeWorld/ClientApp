export class ParsedTokenType {
	constructor() {
		this.aud = "";
		this.exp = 0;
		this.iss = "";
		this.nbf = 0;
		this.netMemberID = "";
		this.role  = null;
		this.securityStamp = "";
		this.sub = "";
		this.unique_name = "";
	}
	aud: string;
	exp: number;
	iss: string;
	nbf: number;
	netMemberID: string;
	role: Array<string> | null;
	securityStamp: string;
	sub: string;
	unique_name: string;
}
