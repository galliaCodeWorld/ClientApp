export class CompanyProfileDto {
	constructor() {
		this.companyProfileId = 0;
		this.memberId = 0;
		this.createdDate  = null;
		this.companyName = "";
		this.logoFilename = "";
		this.companyLocationId = 0;
		this.description = "";
		this.contactEmail = "";
    this.src = "";
	}
	companyProfileId?: number;
	memberId?: number; //required
	createdDate: Date | null;
	companyName?: string; // required, max 300
	logoFilename?: string; // field name: uploadImage
	companyLocationId?: number; // must use existing companyLocationId or null
	description?: string;
	contactEmail?: string;
  src?: String;
}
