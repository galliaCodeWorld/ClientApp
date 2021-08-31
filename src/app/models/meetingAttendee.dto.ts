import { MemberType } from "./index";

export class MeetingAttendeeDto {
	constructor() {
		this.meetingAttendeeId = 0;
		this.meetingId = 0;
		this.createdDate  = null;
		this.email = "";
		this.name = "";
		this.memberId = 0;
		this.member  = null;
		this.rsvp  = null;
	}

	meetingAttendeeId: number;
	meetingId: number;
	createdDate: Date | null;
	email: string;
	name: string;
	rsvp?: boolean | null;
	memberId?: number;
	member?: MemberType | null;
}
