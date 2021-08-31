import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingCallDialogComponent } from './outgoing-call-dialog.component';

describe('OutgoingCallDialogComponent', () => {
  let component: OutgoingCallDialogComponent;
  let fixture: ComponentFixture<OutgoingCallDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingCallDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingCallDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
