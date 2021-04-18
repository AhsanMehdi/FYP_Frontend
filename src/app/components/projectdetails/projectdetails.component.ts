import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  commentProjectForm: FormGroup;
  comment: any
  projectId: string
  project:any
  isDataLoaded=false
  constructor(   private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router, private backendService: BackendService,
      private alertService: AlertService) 
      {
      this.projectId = this.route.snapshot.queryParams.id;
        
      }
     loading = false;
// declaring some variables for commenting on project 


  ngOnInit(): void {
    this.commentProjectForm = this.formBuilder.group({
   
     
      comment: ['', [Validators.required, Validators.minLength(12)]],
      like: ['', Validators.required],
      dislike: ['', Validators.required],
      noOfLikes: ['', Validators.required],
      noOfDisLikes: ['', Validators.required]
 
  });
    this.backendService.getProjectById(this.projectId)
    .pipe(first())
    .subscribe(
        data => {
         this.project = data.project[0]
         console.log(this.project)
        this.isDataLoaded=true
      
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        })
  }
/* function used to comment on project*/
  commentProject(){
    if (this.commentProjectForm.value.like == "like")
    this.commentProjectForm.value.noOfLikes += 1;
    if (this.commentProjectForm.value.dislike == "dislike")
    this.commentProjectForm.value.noOfDisLikes += 1;
    

    this.backendService.commentProject(this.commentProjectForm.value ,this.projectId)
    .pipe(first())
    .subscribe(
        data => {
        
         console.log(this.project)
      
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        })
  }
}
