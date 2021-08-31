import {
	PhoneLineConnectionType
} from './index';

export class PhoneLineType {
	constructor() {
		this.phoneLineConnections = new Array<PhoneLineConnectionType>();
		this.phoneLineId = 0;
		this.created  = null;
		this.isDeleted = false;
		this.phoneLineGuid = "";
	}
	phoneLineId: number;
	created: Date | null;
	phoneLineGuid: string;
	isDeleted: boolean;
	phoneLineConnections: PhoneLineConnectionType[];
}
