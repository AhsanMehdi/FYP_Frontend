import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SignupPageComponent} from './components/signuppage/signuppage.component';
import {DonorhomeComponent} from './components/donorhome/donorhome.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {NgosignupComponent} from './components/ngosignup/ngosignup.component';
import {NgohomeComponent} from './components/ngohome/ngohome.component';
import {SigninPageComponent} from './components/signinpage/signinpage.component';
import {ProjectDetailsComponent} from './components/projectdetails/projectdetails.component';
import { UploadProjectComponent } from './components/uploadproject/uploadproject.component';
import { ChatBoxComponent } from './components/chatbox/chatbox.component';
import { DonorProfileComponent } from './components/donorprofile/donorprofile.component';
import { NgoProfileComponent } from './components/ngoprofile/ngoprofile.component';
import { CampaignDetailsComponent } from './components/campaigndetails/campaigndetails.component';
import { NgoDetailsComponent } from './components/ngodetails/ngodetails.component';
import { InitialInformationComponent } from './components/initialinformation/initialinformation.component';
import { DetailInformationComponent } from './components/detailinformation/detailinformation.component';
import { HeaderComponent } from './components/header/header.component';
import {CampaignsComponent} from './components/campaigns/campaigns.component';
import {NgosComponent} from './components/ngos/ngos.component';
import { UserchoiceComponent } from './components/userchoice/userchoice.component';
import { DonortimelineComponent } from './components/donortimeline/donortimeline.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { CampaignaddComponent } from './components/campaignadd/campaignadd.component';
import { ProjectuploadComponent } from './components/projectupload/projectupload.component';
import { NgoeditprofileComponent } from './components/ngoeditprofile/ngoeditprofile.component';
import { DomseacompComponent } from './components/domseacomp/domseacomp.component';
import { NgodetailpageComponent } from './components/ngodetailpage/ngodetailpage.component';
import { AboutComponent } from './components/about/about.component';
import { SettingspageComponent } from './component/settingspage/settingspage.component';
import { SettingComponent } from './components/setting/setting.component';
import { NghomeComponent } from './components/nghome/nghome.component';
import { NgtimelineComponent } from './components/ngtimeline/ngtimeline.component';
import { EditprojectComponent } from './components/editproject/editproject.component';
import { EditcampaignComponent } from './components/editcampaign/editcampaign.component';
import { CreatedprojectsComponent } from './components/createdprojects/createdprojects.component';
import { CreatedcampaignsComponent } from './components/createdcampaigns/createdcampaigns.component';
import { TempyyyComponent } from './components/tempyyy/tempyyy.component';
import { DonatenowComponent } from './components/donatenow/donatenow.component';




const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '', component: HeaderComponent
  },
  
  {
    path: 'signuppage', component: SignupPageComponent
  },
  {
    path: 'donatenow', component: DonatenowComponent
  },
  {
    path: 'signinpage', component: SigninPageComponent
  },
  {
    path: 'projectdetails', component: ProjectDetailsComponent
  },
  {
    path: 'campaigndetails', component: CampaignDetailsComponent
  },
  {
    path: 'ngodetails', component: NgoDetailsComponent
  },
  {
    path: 'uploadproject', component: UploadProjectComponent
  },
  {
    path: 'chatbox', component: ChatBoxComponent
  },
  {
    path: 'donorprofile', component: DonorProfileComponent
  },
  {
    path: 'initialinformation', component:  InitialInformationComponent
  },
  {
    path: 'detailinformation', component:  DetailInformationComponent
  },
  {
    path: 'ngoprofile', component: NgoProfileComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'donorhome', component: DonorhomeComponent
  },
  {
    path: 'ngohome', component: NgohomeComponent
  },
  {
    path: 'ngosignup', component: HomeComponent
  },
  {
    path: 'projectedit', component: HomeComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'campaigns', component: CampaignsComponent
  },
  {
    path: 'ngos', component: NgosComponent
  },
  {
    path: 'userchoice', component: UserchoiceComponent
  },
  {
    path: 'donortimeline', component: DonortimelineComponent
  },
  {
    path: 'editprofile', component: EditprofileComponent
  },
  {
    path: 'campaignadd', component: CampaignaddComponent
  },
  {
    path: 'projectupload', component: ProjectuploadComponent
  },
  {
    path: 'ngoeditprofile', component: NgoeditprofileComponent
  },
  {
    path: 'ngodetails', component: NgoDetailsComponent
  },
  {
    path: 'domseacomp', component: DomseacompComponent
  },
  {
    path: 'ngodetailpage', component: NgodetailpageComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'settingspage', component: SettingspageComponent
  },
  {
    path: 'setting', component: SettingComponent
  },
  {
    path: 'nghome', component: NghomeComponent
  },
  {
    path: 'ngtimeline', component: NgtimelineComponent
  },
  {
    path: 'editproject', component: EditprojectComponent
  },
  {
    path: 'editcampaign', component: EditcampaignComponent
  },
  {
    path: 'createdprojects', component: CreatedprojectsComponent
  },
  {
    path: 'createdcampaigns', component: CreatedcampaignsComponent
  },
  {
    path: 'tempyyy', component: TempyyyComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
