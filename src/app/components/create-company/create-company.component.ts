import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { PbxService, UserService, SignalrService, JsHelperService } from '../../services/index';
import { CompanyProfileDto } from '../../models/index';

@Component({
	styleUrls: ['./create-company.component.scss'],
	templateUrl: 'create-company.component.html'
})
export class CreateCompanyComponent {
	image: any = 'assets/images/default-avatar.png';
	companyName: string = '';
	companyFormControl: FormControl
	imageBlob: any;
	constructor(
		private dialogRef: MatDialogRef<CreateCompanyComponent>,
		private pbxService: PbxService,
		private userService: UserService,
		private signalrService: SignalrService,
		private jsHelperService: JsHelperService) {
		this.companyFormControl = new FormControl('', [
			Validators.required,
		]);
	}

	pictureChanged(obj: any) {
		this.image = obj.base64;
		this.imageBlob = obj.blob;
	}

	cancel() {
		this.dialogRef.close(null);
	}

	save() {
		let jwt = this.signalrService.jwtToken;

		if (!this.jsHelperService.isEmpty(jwt)) {
      let companyProfile: CompanyProfileDto = new CompanyProfileDto;
      companyProfile.companyLocationId = 0;
      companyProfile.companyName = this.companyName;
      companyProfile.memberId = this.userService.profile.memberId;


			this.pbxService.createCompanyProfile(companyProfile, jwt.access_token)
				.then(data => {
					return this.pbxService.getCompanyProfilesByMemberId({
						id: this.userService.profile.memberId
					}, jwt.access_token)
				})
				.then((companyProfiles: CompanyProfileDto[]) => {
					console.log('company created')
					return this.pbxService.addCompanyProfileImage(this.imageBlob, companyProfiles[0].companyProfileId!, jwt.access_token)
				})
				.then((companyProfile: any) => {
					this.dialogRef.close(companyProfile)
				})
				.catch(error => {
					console.log(error)
					this.dialogRef.close(null)
				})
		}
	}
}
