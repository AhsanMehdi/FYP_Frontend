import { CookieService } from 'ngx-cookie-service';


import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import "./ckeditor.loader";
import 'ckeditor';
import {
  HostListener,
  NgZone
} from '@angular/core';

import {
  FormControl
} from '@angular/forms';
import {
  Http,
  Response
} from '@angular/http';
import {Router} from '@angular/router';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';



const now = new Date(); /** * * * @ export * @ class ProjectDetailTabs */
@ Component({
  selector: 'project-detail-tabs',
  templateUrl: './projectdetailtabs.component.html',
  styleUrls: ['./tabs.component.scss'],
}) export class ProjectDetailTabs implements OnInit {
  date: {year: number, month: number};
  publishproject: false;
checkvalid(val: boolean):boolean{
console.log(val)
  return val;
}
  selectToday() {
    
  }
  ngOnInit(): void {
  }





}

