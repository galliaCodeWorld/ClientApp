import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Service } from '../../services/index'
import {
	MaterialAlertMessageType
} from '../../models/index'
import {
	PhotoCameraComponent
} from "../index";
@Component({
	selector: 'image-selector',
	templateUrl: './image-selector.component.html'
})
export class ImageSelectorComponent {
	constructor(
		private service: Service,
		private matDialog: MatDialog,
	) {
	}

  @Input() title: String = "Add Photo";
	@Output() onImageSelected: EventEmitter<string> = new EventEmitter<string>();

	ngOnInit() {
	}

	openCamera(): void {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(res => {
      let dialogRef = this.matDialog.open(PhotoCameraComponent, {
        width: '80%',
        height: '80%'
      })

      dialogRef.componentInstance.onUsePhoto.subscribe((imageDataUri: string) => {
        this.onImageSelected.emit(imageDataUri);
        dialogRef.close();
      });

      dialogRef.afterClosed().subscribe(() => {
        dialogRef.componentInstance.onUsePhoto.unsubscribe();
      });
    }).catch(err => {
      let alert = new MaterialAlertMessageType();
      alert.title = "Camera Error";
      alert.message = "Unable to retrieve video. Unable to retrieve a camera";
      this.service.openAlert(alert);
      console.log("No media devices found.");
    })
	}

	//openAddContactModal(): void {
	//	let dialogRef = this.matDialog.open(FormAddContactComponent, {
	//		width: '50%',
	//		height: '100%'
	//	})
	//}

	photoSelected(event: any) {
		let input: HTMLInputElement = event.target;
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			let file = input.files[0]
			reader.readAsDataURL(file);
			reader.onload = (e: any) => {
				//console.log("e.target.result: ", e.target.result);
				let imageDataUri: string = e.target.result;
				this.onImageSelected.emit(imageDataUri);
			}
		}
	}
}
