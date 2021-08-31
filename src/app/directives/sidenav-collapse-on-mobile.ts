import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'

import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import "rxjs/Rx";

@Directive({ selector: '[mobileCollapse]' })
export class mobileCollapse {
	@Output() mobileCollapse: EventEmitter<any> = new EventEmitter();

	mobileWidth: number = 450;
	constructor(private el: ElementRef, private sidenav: MatSidenav) {
		el.nativeElement.addEventListener('click', () => {
			if (window.innerWidth < this.mobileWidth) {
				this.sidenav.close();
				//console.log('true')
			}
			//console.log('false')
		})

		this.checkViewportSize();
		fromEvent(window, 'resize')
      .pipe(debounceTime(50))
			.subscribe(() => {
				this.checkViewportSize()
			});
	}

	checkViewportSize(): any {
		if (window.innerWidth < this.mobileWidth) {
			this.sidenav.close();
		} else if (!this.sidenav.opened) {
			this.sidenav.open();
		}
	}
}