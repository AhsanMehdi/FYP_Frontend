
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignupPageComponent } from './components/signuppage/signuppage.component';
import { SigninPageComponent } from './components/signinpage/signinpage.component';
import { ProjectDetailsComponent } from './components/projectdetails/projectdetails.component';
import { UploadProjectComponent } from './components/uploadproject/uploadproject.component';
import { ChatBoxComponent } from './components/chatbox/chatbox.component';
import { DonorProfileComponent } from './components/donorprofile/donorprofile.component';
import { NgoProfileComponent } from './components/ngoprofile/ngoprofile.component';
import { DonorhomeComponent } from './components/donorhome/donorhome.component';
import { CampaignDetailsComponent } from './components/campaigndetails/campaigndetails.component';
import { NgoDetailsComponent } from './components/ngodetails/ngodetails.component';
import { InitialInformationComponent } from './components/initialinformation/initialinformation.component';
import { DetailInformationComponent } from './components/detailinformation/detailinformation.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProjectsComponent } from './components/projects/projects.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';


import { AppRoutingModule } from './app-routing.module';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import {  NgProgressModule} from "ngx-progressbar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupPageComponent,
    SigninPageComponent,
    ProjectDetailsComponent,
    UploadProjectComponent,
    ChatBoxComponent,
    DonorProfileComponent,
    NgoProfileComponent,
    DonorhomeComponent,
    CampaignDetailsComponent,
    NgoDetailsComponent,
    InitialInformationComponent,
    DetailInformationComponent,
    ProjectsComponent,
    CampaignsComponent
    
    


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    BrowserModule, LazyLoadImageModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    ToastrModule.forRoot()
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
