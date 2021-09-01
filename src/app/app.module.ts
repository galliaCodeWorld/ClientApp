import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppModuleMaterials } from './app.module.materials';

import {
  // used in service
  ShowFormErrorsComponent, PhoneCallComponent, PhoneCallActionPopover,
  PrivateMessagingComponent, MemberLoginFormComponent, LoginOptionsComponent,
  // used in pages
  // HomeComponent,
  Page404Component, PageErrorComponent,
  LoginShellComponent,
  HLoaderComponent,
  ContactSearchModalComponent,
  CapturePhotoModalComponent,
  UploadPhotoMenuComponent,
  CallFailureModalComponent,
  DashboardHomeComponent,
  MaterialAlertComponent,
  MaterialActionAlertComponent,
  MaterialSnackBarComponent,
  PbxRepLinesComponent,
  CompanyComponent,
  EmployeesComponent,
  CompanyOverviewComponent,
  CreateCompanyComponent,
  CreatePbxLineComponent,
  InviteEmployeeComponent,
  CallQueueComponent,
  PbxLineComponent,
  PbxLineInformationComponent,
  PbxLineChatComponent,
  PbxLineQueueComponent,
  PbxLineCallComponent,
  PbxLineVideoComponent,
  PbxLineOutgoingCallDialog,
  PbxLinesComponent,
  PbxCustomerComponent,
  PbxSearchBoxComponent,
  PbxSearchComponent,
  PbxRepShellComponent,
  PbxEmployersComponent,
  OutgoingCallDialogComponent,
  EmployeeCompaniesComponent,
  GuestLoginFormComponent,
  RegisterFormComponent,
  FooterComponent,
  ProfileSummaryComponent,
  NavMenuComponent,
  ContactUsFormComponent,
  ContactComponent,
  ContactListComponent,
  ButtonAddContactComponent,
  SidenavToggleComponent,
  FormAddContactComponent,
  ImageSelectorComponent,
  PhotoCameraComponent,
  FormEditContactComponent,
  ContactCardComponent,
  IdCardComponent,
  IncomingPhoneCallComponent,
  PhoneListenerComponent,
  GlobalListenerComponent,
  GlobalPhoneListenerComponent,
  FormCreateCompanyComponent,
  FormEditCompanyComponent,
  CompanyLocationsComponent,
  CompanyPbxlineDetailsComponent,
  CompanyPbxlineRepsComponent,
  CompanyPhotosComponent,
  CompanyVideosComponent,
  EmployerAssignedPbxlineComponent,
  EmployerDetailsComponent,
  FormCompanyEmployeeAddComponent,
  FormCompanyEmployeeEditComponent,
  FormCompanyEmployeeInviteAddComponent,
  FormCompanyEmployeeInviteEditComponent,
  FormCompanyLocationAddComponent,
  FormCompanyPbxlineAddComponent,
  FormCompanyPbxlineEditComponent,
  FormCompanyPhotoAddComponent,
  FormCompanyVideoAddComponent,
  FormCompanyPbxlineRepAddComponent,
  CompanyPhotoComponent,
  ButtonAddCompanyPhotoComponent,
  FormCompanyLocationEditComponent,
  ButtonAddCompanyLocationComponent,
  ButtonAddCompanyVideoComponent,
  ButtonAddEmployeeInviteComponent,
  ButtonAddPbxlineComponent,
  CompanyLocationComponent,
  CompanyPbxlineComponent,
  EmployeeCardComponent,
  CompanyEmployeeInviteComponent,
  CompanyEmployeeComponent,
  PublicPbxlineComponent,
  PhoneRingerComponent,
  TextMessagingComponent,
  TextMessagingMessageComponent,
  PbxCustomerDetailsComponent,
  OtherRepsComponent,
  OtherRepComponent,
  FormGetInfoComponent,
  MeetingAttendeeComponent,
  FormAddAttendeeComponent,
  MeetingItemComponent,
  FormEditMeetingComponent,
  MeetingDetailsComponent,
  MeetingInviteComponent,
  FormNetcastAddComponent,
  FormNetcastEditComponent,
  ButtonAddNetcastComponent,
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
import {
  CompanyEmployeeDetailsPage,
  RepPbxPage,
  CustomerPbxPage,
  MyCompanyPage,
  CompanyEditPage,
  DashboardPage,
  CompanyPbxlinesPage,
  CompanyEmployeesPage,
  CompanyEmployeeInvitesPage,
  RegisterPage,
  LoginPage,
  CompanyProfilePage,
  SettingsPage,
  AccountPage,

  MyEmployersPage,
  ContactsPage,
  ContactUsPage,
  PublicUserProfilePage,
  LoginHelpPage,
  LogoutPage,
  PhonePage,
  BlockListPage,
  CompanyCreatePage,
  EmployerAssignedPbxlinesPage,
  CompanySearchPage,
  GuestAccountPage,
  ManageMeetingsPage,
  MeetingsPage,
  MeetingInvitesPage,
  CreateMeetingPage,
  MeetingPage,
  MeetingsDashboardPage,
  PastMeetingsPage,
  NetcasteePage,
  NetcasterPage,
  NetcastListPage,
  NetcastDashboardPage,
  NetcastSearchPage,
  NetcastDetailsPage,
  ErrorPage,
} from "./pages/index";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage,
    canActivate: [PageCanActivate]
  },
  {
  	path: 'register',
  	component: RegisterPage,
  	canActivate: [PageCanActivate]
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [GuestCanActivate]
  },
  {
    path: 'settings',
    component: SettingsPage,
    canActivate: [GuestCanActivate]
  },
  {
    path: 'account',
    component: AccountPage,
    canActivate: [GuestCanActivate]
  },
  {
    path: 'my-company',
    component: MyCompanyPage,
    canActivate: [MemberCanActivate]
  },
  {
    path: 'company-edit',
    component: CompanyEditPage,
    canActivate: [MemberCanActivate]
  },
  {
    path: 'company-profile/:companyProfileId',
    component: CompanyProfilePage,
    canActivate: [GuestCanActivate]
  },
  {
    path: 'company-employee-invites',
    component: CompanyEmployeeInvitesPage,
    canActivate: [MemberCanActivate]
  },
  {
    path: 'company-employees/:companyProfileId',
    component: CompanyEmployeesPage,
    canActivate: [MemberCanActivate]
  },
  {
    path: 'company-employee-details/:companyEmployeeId',
    component: CompanyEmployeeDetailsPage,
    canActivate: [MemberCanActivate]
  },
  {
    path: 'company-pbxlines',
    component: CompanyPbxlinesPage,
    canActivate: [MemberCanActivate]
  },
  {
    path: 'rep-pbx/:pbxlineRepId',
    component: RepPbxPage,
    canActivate: [MemberCanActivate]
  },
  {
    path: 'customer-pbx/:pbxlineId',
    component: CustomerPbxPage,
    canActivate: [PageCanActivate]
  },

  {
  	path: 'login-help',
  	component: LoginHelpPage,
  	canActivate: [PageCanActivate]
  },
  {
  	path: 'contactus',
  	component: ContactUsPage,
  	canActivate: [PageCanActivate]
  },
  {
  	path: 'logout',
  	component: LogoutPage
  },
  {
  	path: 'netcast-dashboard',
  	component: NetcastDashboardPage,
  	canActivate: [GuestCanActivate]
  },
  {
  	path: 'netcast-details/:netcastId',
  	component: NetcastDetailsPage,
  	canActivate: [PageCanActivate]
  },
  {
  	path: 'netcast-search',
  	component: NetcastSearchPage,
  	canActivate: [GuestCanActivate]
  },
  {
  	path: 'netcast-list',
  	component: NetcastListPage,
  	canActivate: [MemberCanActivate]
  },
  {
  	path: 'netcaster/:netcastId',
  	component: NetcasterPage,
  	canActivate: [MemberCanActivate]
  },
  {
  	path: 'netcastee/:netcastId',
  	component: NetcasteePage,
  	canActivate: [PageCanActivate]
  },
  {
  	path: 'phone',
  	component: PhonePage,
  	canActivate: [PageCanActivate]
  },
  {
  	path: 'phone/:emailToCall',
  	component: PhonePage,
  	canActivate: [PageCanActivate]
  },
  {
  	path: 'block-list',
  	component: BlockListPage,
  	canActivate: [MemberCanActivate]
  },
  {
  	path: 'contacts',
  	component: ContactsPage,
  	canActivate: [MemberCanActivate]
  },
  {
  	path: 'company-create',
  	component: CompanyCreatePage,
  	canActivate: [MemberCanActivate]
  },
  {
  	path: 'my-employers',
  	component: MyEmployersPage,
  	canActivate: [MemberCanActivate]
  },
  {
  	path: 'employer-assigned-pbxlines/:companyProfileId',
  	component: EmployerAssignedPbxlinesPage,
  	canActivate: [MemberCanActivate]
  },
  {
  	path: 'public-user-profile/:memberId',
  	component: PublicUserProfilePage,
  	canActivate: [PageCanActivate]
  },
  {
  	path: 'company-search',
  	component: CompanySearchPage,
  	canActivate: [GuestCanActivate]
  },
  {
  	path: 'guest-account',
  	component: GuestAccountPage,
  	canActivate: [GuestCanActivate]
  },
  {
  	path: 'meetings-dashboard',
  	component: MeetingsDashboardPage
  },
  {
  	path: 'manage-meetings',
  	component: ManageMeetingsPage,
  	canActivate: [MemberCanActivate]
  },
  {
  	path: 'create-meeting',
  	component: CreateMeetingPage,
  	canActivate: [MemberCanActivate]
  },
  {
  	path: 'past-meetings',
  	component: PastMeetingsPage,
  	canActivate: [MemberCanActivate]
  },
  {
  	path: 'meetings',
  	component: MeetingsPage,
  	canActivate: [GuestCanActivate]
  },
  {
  	path: 'meeting/:meetingId',
  	component: MeetingPage,
  	canActivate: [PageCanActivate]
  },
  {
  	path: 'meeting-invites',
  	component: MeetingInvitesPage,
  	canActivate: [GuestCanActivate]
  },
  {
  	path: 'error-page',
  	component: ErrorPage
  },

  { path: 'error', component: PageErrorComponent },
  { path: '**', component: Page404Component }
]
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
    // HomeComponent,
    Page404Component,
    PageErrorComponent,
    LoginShellComponent,
    HLoaderComponent,
    ContactSearchModalComponent,
    CapturePhotoModalComponent,
    UploadPhotoMenuComponent,
    CallFailureModalComponent,
    DashboardHomeComponent,
    MaterialAlertComponent,
    MaterialActionAlertComponent,
    MaterialSnackBarComponent,
    PbxRepLinesComponent,
    CompanyComponent,
    EmployeesComponent,
    CompanyOverviewComponent,
    CreateCompanyComponent,
    CreatePbxLineComponent,
    InviteEmployeeComponent,
    CallQueueComponent,
    PbxLineComponent,
    PbxLineInformationComponent,
    PbxLineChatComponent,
    PbxLineQueueComponent,
    PbxLineCallComponent,
    PbxLineVideoComponent,
    PbxLineOutgoingCallDialog,
    PbxLinesComponent,
    PbxCustomerComponent,
    PbxSearchBoxComponent,
    PbxSearchComponent,
    PbxRepShellComponent,
    PbxEmployersComponent,
    OutgoingCallDialogComponent,
    EmployeeCompaniesComponent,
    GuestLoginFormComponent,
    RegisterFormComponent,
    FooterComponent,
    ProfileSummaryComponent,
    NavMenuComponent,
    ContactUsFormComponent,
    ContactComponent,
    ContactListComponent,
    ButtonAddContactComponent,
    SidenavToggleComponent,
    FormAddContactComponent,
    ImageSelectorComponent,
    PhotoCameraComponent,
    FormEditContactComponent,
    ContactCardComponent,
    IdCardComponent,
    IncomingPhoneCallComponent,
    PhoneListenerComponent,
    GlobalListenerComponent,
    GlobalPhoneListenerComponent,
    FormCreateCompanyComponent,
    FormEditCompanyComponent,
    CompanyLocationsComponent,
    CompanyPbxlineDetailsComponent,
    CompanyPbxlineRepsComponent,
    CompanyPhotosComponent,
    CompanyVideosComponent,
    EmployerAssignedPbxlineComponent,
    EmployerDetailsComponent,
    FormCompanyEmployeeAddComponent,
    FormCompanyEmployeeEditComponent,
    FormCompanyEmployeeInviteAddComponent,
    FormCompanyEmployeeInviteEditComponent,
    FormCompanyLocationAddComponent,
    FormCompanyPbxlineAddComponent,
    FormCompanyPbxlineEditComponent,
    FormCompanyPhotoAddComponent,
    FormCompanyVideoAddComponent,
    FormCompanyPbxlineRepAddComponent,
    CompanyPhotoComponent,
    ButtonAddCompanyPhotoComponent,
    FormCompanyLocationEditComponent,
    ButtonAddCompanyLocationComponent,
    ButtonAddCompanyVideoComponent,
    ButtonAddEmployeeInviteComponent,
    ButtonAddPbxlineComponent,
    CompanyLocationComponent,
    CompanyPbxlineComponent,
    EmployeeCardComponent,
    CompanyEmployeeInviteComponent,
    CompanyEmployeeComponent,
    PublicPbxlineComponent,
    PhoneRingerComponent,
    TextMessagingComponent,
    TextMessagingMessageComponent,
    PbxCustomerDetailsComponent,
    OtherRepsComponent,
    OtherRepComponent,
    FormGetInfoComponent,
    MeetingAttendeeComponent,
    FormAddAttendeeComponent,
    MeetingItemComponent,
    FormEditMeetingComponent,
    MeetingDetailsComponent,
    MeetingInviteComponent,
    FormNetcastAddComponent,
    FormNetcastEditComponent,
    ButtonAddNetcastComponent,
    // pages
    CompanyEmployeeDetailsPage,
    RepPbxPage,
    CustomerPbxPage,
    MyCompanyPage,
    CompanyEditPage,
    DashboardPage,
    CompanyPbxlinesPage,
    CompanyEmployeesPage,
    CompanyEmployeeInvitesPage,
    RegisterPage,
    LoginPage,
    CompanyProfilePage,
    SettingsPage,
    AccountPage,

    MyEmployersPage,
    ContactsPage,
    ContactUsPage,
    PublicUserProfilePage,
    LoginHelpPage,
    LogoutPage,
    PhonePage,
    BlockListPage,
    CompanyCreatePage,
    EmployerAssignedPbxlinesPage,
    CompanySearchPage,
    GuestAccountPage,
    ManageMeetingsPage,
    MeetingsPage,
    MeetingInvitesPage,
    CreateMeetingPage,
    MeetingPage,
    MeetingsDashboardPage,
    PastMeetingsPage,
    NetcasteePage,
    NetcasterPage,
    NetcastListPage,
    NetcastDashboardPage,
    NetcastSearchPage,
    NetcastDetailsPage,
    ErrorPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppModuleMaterials,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-center',
        messageClass: 'is-open-sans',
        titleClass: 'is-open-sans',
        timeOut: 6400
      }
    ),
    RouterModule.forRoot(routes),
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
