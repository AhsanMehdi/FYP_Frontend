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
    path: 'initialinformationcomponent', component:  InitialInformationComponent
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
    path: 'ngohome', component: HomeComponent
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
  }
  ,
  {
    path: 'ngos', component: NgosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
