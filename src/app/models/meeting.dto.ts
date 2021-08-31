import {
	MeetingAttendeeDto,
	MemberType,
	PhoneLineType
} from "./index";

export class MeetingDto {
	constructor() {
		this.meetingId = 0;
		this.memberId = 0;
		this.createdDate  = null;
		this.title = "";
		this.meetDate  = null;
		this.meetLength = 0;
		this.description = "";
		this.isPrivate = true;
		this.endDate  = null;
		this.phoneLineId = 0;
		this.phoneLine  = null;
		this.meetingAttendees  = null;
		this.member  = null;
	}

	meetingId: number;
	memberId: number;
	createdDate: Date | null;
	title: string;
	meetDate: Date | null;
	meetLength: number;
	description: string;
	isPrivate: boolean;
	endDate?: Date | null;
	phoneLineId?: number;

	phoneLine?: PhoneLineType | null;

	meetingAttendees?: MeetingAttendeeDto[] | null;

	member: MemberType | null;
}
