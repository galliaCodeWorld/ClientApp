import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppModuleMaterials } from './app.module.materials';
import {
  // used in service
  ShowFormErrorsComponent, PhoneCallComponent, PhoneCallActionPopover,
  PrivateMessagingComponent, MemberLoginFormComponent, LoginOptionsComponent,
  // used in pages
  HomeComponent,
  Page404Component, PageErrorComponent,
} from './components/index'
import {
  PageCanActivate,
  GuestCanActivate,
  MemberCanActivate,
  EmployeeCompaniesResolver
} from "./guards/index";
import {
  ContactService,
  SettingsService,
  VideoHelperService,
  ConfigService,
  SignalrService,
  JsHelperService,
  LocalStorageService,
  BlockCallService,
  UserService,
  PushService,
  PermissionsService,
  FlashMessageService,
  CapturePhotoService,
  MaterialsHelperService,
  PbxService,
  FormsErrorService,
  Service,
  MeetingService,
  NetcastService,
} from './services/index';
import { MapperService } from './services/mapper.service';

@NgModule({
  declarations: [
    AppComponent,
    // used in service
    ShowFormErrorsComponent,
    LoginOptionsComponent,
    MemberLoginFormComponent,
    PhoneCallComponent,
    PhoneCallActionPopover,
    PrivateMessagingComponent,
    // used in page
    HomeComponent,
    Page404Component,
    PageErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppModuleMaterials,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-center',
        messageClass: 'is-open-sans',
        titleClass: 'is-open-sans',
        timeOut: 6400
      }
    ),
  ],
  providers: [
    { provide: 'ORIGIN_URL', useValue: location.origin },
    ContactService,
    SettingsService,
    VideoHelperService,
    ConfigService,
    SignalrService,
    JsHelperService,
    LocalStorageService,
    BlockCallService,
    UserService,
    PushService,
    PermissionsService,
    FlashMessageService,
    CapturePhotoService,
    MaterialsHelperService,
    PbxService,
    FormsErrorService,
    Service,
    PageCanActivate,
    GuestCanActivate,
    MemberCanActivate,
    EmployeeCompaniesResolver,
    MeetingService,
    NetcastService,
    MapperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
