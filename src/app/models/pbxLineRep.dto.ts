import { CompanyEmployeeDto, PbxLineDto } from "./index";

export class PbxLineRepDto {
	constructor() {
		this.pbxLineId = 0;
		this.pbxLineRepId = 0;
		this.createdDate  = null;
		this.companyEmployeeId = 0;
		this.isDisabled = false;
		this.companyEmployee  = null;
		this.pbxLine  = null;
	}
	pbxLineRepId: number;
	pbxLineId: number; // required
	createdDate: Date | null;
	companyEmployeeId: number; //required
	isDisabled: boolean;
	companyEmployee: CompanyEmployeeDto | null;
	pbxLine: PbxLineDto | null;
}
