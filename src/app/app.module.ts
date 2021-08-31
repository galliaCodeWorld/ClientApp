import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppModuleMaterials } from './app.module.materials';
import {
  AppComponent, ShowFormErrorsComponent,
  // used in service
  PhoneCallComponent, PhoneCallActionPopover, PrivateMessagingComponent, MemberLoginFormComponent, LoginOptionsComponent,
  // used in pages
} from './components/index'
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
