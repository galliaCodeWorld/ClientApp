export class PbxCallQueueDto {
	constructor() {
		this.pbxCallQueueId = 0;
		this.created  = null;
		this.pbxLineId = 0;
    this.pbxLineRepId = null;
		this.connectionGuid = "";
		this.notes = "";
		this.timeAllotment = 0;
		this.email = "";
		this.subject = "";
		this.message = "";
		this.name = "";
	}
	pbxCallQueueId: number;
	created: Date | null;
	pbxLineId: number; //required
	pbxLineRepId: number | null; // an exisiting pbxLineRepId or  null
	connectionGuid: string; // required, max 300
	notes: string; // max 2000
	timeAllotment: number;
	email: string;
	subject: string;
	message: string;
	name: string;
}
