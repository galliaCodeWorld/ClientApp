import { NetcastGenreDto } from "./netcastGenre.dto";
import { MemberType } from ".";

export class NetcastDto {
	constructor() {
		this.netcastId = 0;
		this.memberId = 0;
		this.createdDate  = null;
		this.title = "";
		this.description = "";
		this.isPrerecorded = false;
		this.localFileLocation = "";
		this.netcastGenreId = 0;
		this.isPrivate = false;
		this.tags = "";
		this.imageFilename = "";
		this.startDateTime  = null;
		this.endDateTime  = null;
		this.hPassword = "";
		this.member  = null;
		this.connectionGuid = "";
		this.netcastGenre  = null;
	}

	netcastId: number;
	memberId: number;
	createdDate: Date | null;
	title: string;
	description: string;
	isPrerecorded: boolean;
	localFileLocation: string;
	netcastGenreId: number;
	tags: string;
	isPrivate: boolean;
	imageFilename: string;
	startDateTime: Date | null;
	endDateTime: Date | null;
	hPassword: string;
	member: MemberType | null;
	connectionGuid: string;
	netcastGenre: NetcastGenreDto | null;
}
