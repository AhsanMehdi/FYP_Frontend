import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SignupPageComponent} from './components/signuppage/signuppage.component';
import {DonorhomeComponent} from './components/donorhome/donorhome.component';
import {ProjectComponent} from './components/project/project.component';
import {ProjecteditComponent} from './components/projectedit/projectedit.component';
import {NgosignupComponent} from './components/ngosignup/ngosignup.component';
import {NgohomeComponent} from './components/ngohome/ngohome.component';
import {SigninPageComponent} from './components/signinpage/signinpage.component';
import {ProjectDetailsComponent} from './components/projectdetails/projectdetails.component';
import { UploadProjectComponent } from './components/uploadproject/uploadproject.component';
import { ChatBoxComponent } from './components/chatbox/chatbox.component';






const routes: Routes = [
  {
    path: '', component: HomeComponent
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
    path: 'uploadproject', component: UploadProjectComponent
  },
  {
    path: 'chatbox', component: ChatBoxComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'donorhome', component: HomeComponent
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
    path: 'project', component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
