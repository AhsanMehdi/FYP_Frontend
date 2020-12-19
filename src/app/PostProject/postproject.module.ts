import { MDBBootstrapModules } from 'ng-mdb-pro';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { ProjectDetailComponent } from './detailsInformation/projectdetail.component';
import { postProjectRoutingModule } from './postProject-routing.module';
import { RewardComponent } from './rewardsComponent/reward.component';
import { CookieService } from 'ngx-cookie-service';
import {
  FileSelectDirective
} from 'ng2-file-upload';
import {
  FileUploaderComponent
} from './FileUploader/file-uploader.component';
import {
  HttpModule
} from '@angular/http';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule,
  AfterViewInit,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import {
  AngularEchartsModule
} from 'ngx-echarts';
import {
  postproject
} from "./postproject.component";
import {
  InitialInformation
} from "./InitialInformation/initialInformation.component";
import {
  ThemeModule
} from '../../@theme/theme.module';
import {
  ReactiveFormsModule
} from '@angular/forms'
import {
  ProjectDetailTabs
} from "./projectdetailtabs/projectdetailtabs.component";
import {
  CKEditorModule
} from 'ng2-ckeditor';
import {
  ImageUploadModule
} from "angular2-image-upload";
import {
  YoutubePlayerMiniModule
} from 'ng2-youtube-player-mini';
import {
  WebAppComponent
} from "./web3.component";
import {
  UPLOAD_DIRECTIVES
} from 'ng2-file-uploader/ng2-file-uploader';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    ThemeModule,
    ReactiveFormsModule,
    CKEditorModule,
    ImageUploadModule.forRoot(),
    YoutubePlayerMiniModule,
    LazyLoadImageModule,
    FormsModule,
  MDBBootstrapModules.forRoot(),
  postProjectRoutingModule,
  NgbModule,


  ],
  declarations: [

    InitialInformation,
    postproject,
ProjectDetailComponent,
    ProjectDetailTabs,
    WebAppComponent,
    RewardComponent,
    FileSelectDirective,

   

  ],

    schemas: [ NO_ERRORS_SCHEMA ],
    providers: [ CookieService ,],

})
export class PostPRojectModule {



}

