﻿import { Component, AfterViewInit, ViewChild, NgZone } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from "@angular/material/sidenav";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {
	FormBuilder,
	FormArray,
	FormGroup,
	FormControl,
	Validators,
	AbstractControl
} from '@angular/forms';

import { Service } from '../../services/index';
import {
	SearchTermDto,
	CountryDto,
	MaterialAlertMessageType,
	CompanyProfileDto,
	ListItemType,
	LocationSearchDto,
	MeetingDto,
	IdDto,
	OrderByDto,
	StringIdDto,
} from '../../models/index';

@Component({
	templateUrl: './past-meetings.page.html',
	styleUrls: ['./past-meetings.page.scss'],
})

export class PastMeetingsPage {
	constructor(
		private service: Service,
		private fb: FormBuilder,
		public router: Router,
		public activatedRoute: ActivatedRoute,
		private ngZone: NgZone,
	) {
		this.loading = true;
	}

	loading!: boolean;
	isMember!: boolean;
	isLoggedIn!: boolean;
	meetings!: Array<MeetingDto>;

	ngOnInit() {
		// TODO: Add paging and filtering ability feature

		this.service.isCheckedIntoHubConnection();

		this.service.isMember()
			.then((isMember) => {
				this.isMember = isMember;
			});

		this.isLoggedIn = this.service.isLoggedIn;

		this.service.getAccessToken()
			.then((accessToken: string) => {
				let idDto = new StringIdDto();
				idDto.id = this.service.email;
				let orderBy = new OrderByDto();
				orderBy.column = "MeetDate";
				orderBy.direction = "DESC";
				idDto.orderBy = [orderBy];
				return this.service.getPastMeetings(idDto, accessToken);
			})
			.then((meetings: Array<MeetingDto>) => {
				this.meetings = meetings;
			})
			.catch((e) => {
				console.log("manage-meetings.page.ts ngOnInit error: ", e);
			})
			.then(() => {
				this.loading = false;
			})
	}

	@ViewChild('matSidenavContainer') private _container!: MatSidenavContainer;
	ngAfterViewInit() {
		this.ngZone.run(() => {
			setTimeout(() => {
				if (window.innerWidth < 500) {
					this._container.close();
				}
				else {
					this._container.open();
				}
			}, 250);
		});
	}

	gotoMeetingsDashboardPage() {
		this.router.navigate(['/meetings-dashboard'], { relativeTo: this.activatedRoute });
	}

	deleteMeeting(meeting: MeetingDto) {
		//console.log("deleteMeeting meeting: ", meeting);
		let index: number = this.meetings.findIndex((value) => {
			return value.meetingId == meeting.meetingId
		});

		if (index > -1) {
			this.meetings.splice(index, 1);
		}
	}
}
