import { Component, Inject, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SignalrService, PbxService, JsHelperService, FormValidator, EmailValidator } from '../../services/index';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyEmployeeInviteDto } from 'src/app/models';

@Component({
	styleUrls: ['./invite-employee.component.scss'],
	templateUrl: './invite-employee.component.html'
})
export class InviteEmployeeComponent {
	companyId: any;
	employeeInviteForm: FormGroup;

	constructor(
		private dialogRef: MatDialogRef<InviteEmployeeComponent>,
		private pbxService: PbxService,
		private jsHelperService: JsHelperService,
		private signalrService: SignalrService,
		private formBuilder: FormBuilder,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: any,
	) {
		this.companyId = data.id;
		this.employeeInviteForm = this.formBuilder.group({
			firstName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
			lastName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.required, Validators.email])]
		})

		this.employeeInviteForm.valueChanges.subscribe(value => {
			//     console.log(this.employeeInviteForm.controls.email.errors, this.employeeInviteForm.controls.email.value)
		})
	}

	cancel() {
		this.dialogRef.close();
	}

	inviteEmployee() {
		let jwt = this.signalrService.jwtToken;
		if (!this.jsHelperService.isEmpty(jwt)) {
      let companyEmpInvDto = new CompanyEmployeeInviteDto;
      companyEmpInvDto.companyProfileId = this.companyId;
      companyEmpInvDto.firstName = this.employeeInviteForm.get('firstName')?.value;
      companyEmpInvDto.lastName = this.employeeInviteForm.get('lastName')?.value;
      companyEmpInvDto.email = this.employeeInviteForm.get('email')?.value;
			this.pbxService.createCompanyEmployeeInvite(companyEmpInvDto, jwt.access_token)
				.then((data) => {
					console.log(data)
					this.dialogRef.close();
				})
				.catch(error => {
					console.log(error); this.dialogRef.close()
				})
		}
	}
}
