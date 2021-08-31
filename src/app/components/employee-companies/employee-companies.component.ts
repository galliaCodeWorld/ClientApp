import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from "../../services/index";
import {
	CompanyProfileDto
} from "../../models/index";

@Component({
	selector: 'employee-companies-component',
	templateUrl: './employee-companies.component.html',
	styleUrls: ['./employee-companies.component.scss']
})
export class EmployeeCompaniesComponent {
	constructor(
		public service: Service,
		public router: Router,
		public route: ActivatedRoute,
	) { }

	public companyProfiles!: Array<CompanyProfileDto>;

	ngOninit() {
    let inx = Object.keys(this.route.data).findIndex(k => k === 'companyProfile');
    if (inx > -1) {
      let companyProfiles = Object.values(this.route.data)[inx]
      companyProfiles.subscribe((data: Array<CompanyProfileDto>) => {
        for (let i = 0; i < this.companyProfiles.length; i++) {
          data[i].src = this.service.defaultAvatar;
          if (!this.service.isEmpty(data[i].logoFilename) && Number.isInteger(data[i].companyProfileId)) {
            data[i].src = this.service.pbxContentUrl + data[i].companyProfileId + "/" + this.companyProfiles[i].logoFilename + "?" + Date.now().toString();
          }
        }
      })
    }
	}
}
