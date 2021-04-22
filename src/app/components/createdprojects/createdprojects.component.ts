import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { IProject  } from '../../_models/Iproject';
import { Router } from '@angular/router'

@Component({
  selector: 'app-createdprojects',
  templateUrl: './createdprojects.component.html',
  styleUrls: ['./createdprojects.component.scss']
})
export class CreatedprojectsComponent implements OnInit {
  projects: any /* array of projects*/
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  searchText;
  currentUserId: string ;
  constructor(private router:Router, private backendService: BackendService) { }
  showDetials(project){  /*when a user click on readmore button then it works*/
    this.router.navigate(['projectdetails'],{ queryParams: { id: project._id } });
    
    
  }
  ngOnInit(): void {
    this.currentUserId = localStorage.getItem("userid") ;
    this.backendService.getProjectsSpecificUser( this.currentUserId) /*get all projects of current user*/
    .pipe(first())
    .subscribe(
      data => {
        this.projects = data.project;
        console.log("user projects: "+ data.project)

      },
      error => {
        console.log(error);
      });
  }

}
