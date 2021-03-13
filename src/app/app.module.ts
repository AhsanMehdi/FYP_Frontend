
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


// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ProjectsComponent } from './components/projects/projects.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { NgosComponent } from './components/ngos/ngos.component';


import { AppRoutingModule } from './app-routing.module';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import {  NgProgressModule} from "ngx-progressbar";
import { UserchoiceComponent } from './components/userchoice/userchoice.component';
import { DonortimelineComponent } from './components/donortimeline/donortimeline.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { CampaignaddComponent } from './components/campaignadd/campaignadd.component';
import { ProjectuploadComponent } from './components/projectupload/projectupload.component';
import { NgoeditprofileComponent } from './components/ngoeditprofile/ngoeditprofile.component';
import { ProjecteditComponent } from './components/projectedit/projectedit.component';
import { DomseacompComponent } from './components/domseacomp/domseacomp.component';
import { NgodetailpageComponent } from './components/ngodetailpage/ngodetailpage.component';


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
    CampaignsComponent,
    NgosComponent,
    UserchoiceComponent,
    DonortimelineComponent,
    EditprofileComponent,
    CampaignaddComponent,
    ProjectuploadComponent,
    NgoeditprofileComponent,
    ProjecteditComponent,
    DomseacompComponent,
    NgodetailpageComponent
    
    


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
    Ng2SearchPipeModule,
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
