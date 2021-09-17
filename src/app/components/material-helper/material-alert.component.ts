import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

import {
	MaterialAlertMessageType
} from '../../models/index';

@Component({
  selector: 'material-alert',
	styleUrls: ['./material-alert.component.scss'],
	templateUrl: './material-alert.component.html',
})
export class MaterialAlertComponent {
	constructor(
		private domSanitizer: DomSanitizer,
		public dialogRef: MatDialogRef<MaterialAlertComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: MaterialAlertMessageType
	) {
	}

	htmlContent!: SafeHtml;

	ngOnInit() {
    console.log('test...', this.data)
		this.htmlContent = this.domSanitizer.bypassSecurityTrustHtml(this.data.message);
	}

	close(): void {
		//console.log("closing dialog");
		this.dialogRef.close();
	}
}
