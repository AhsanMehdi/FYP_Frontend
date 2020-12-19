

import { Project } from './../../../../model/Project';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {  ViewChild, AfterViewInit} from '@angular/core';
@Component({
  selector: 'project-detail',
  templateUrl: './projectdetail.component.html',
})
export class ProjectDetailComponent{


@Output() DetailSelection  = new EventEmitter<number>();
@Input() _project: Project;

DetailSelectionButton( value: number){
  console.log(this._project);
  console.log(value)
  this.DetailSelection.emit(value);
}
ngAfterViewInit(){



}


}
