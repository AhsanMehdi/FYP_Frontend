import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { IReviewProject  } from '../../_models/Iprojectreview';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { first } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  public user_id = localStorage.getItem("userid")
  public isUser;
  public owner_id: string
  reviewProjects: any /* contains all comments of a specific project*/
  public showComment;
  public totalLikes: number = 0 ;  /* it contains the total likes*/
  public isPost;
  public commentAgain;
  showError: string = ""


  
  /*declaring variables for the comment of project*/
  comment: string
  islike = false
  like: string =""


  interestValue: string
  /* variables for the project comment*/
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
     commentProjectForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(12)]],
      like: ['', Validators.required]
 
  });
  showDetials(project){  /*when a user click on readmore button then it works*/
    this.router.navigate(['donatenow'],{ queryParams: { id: project._id } });
  }
// declaring some variables for commenting on project 
  likePressed(){
    this.islike = true;
       this.like = "like"

      
  }

  ngOnInit(): void {

  this.getSpecificProject() ; // calling function to get specific project
  this.GetCommentsOfProject() ;// calling a function to get comments on a specific project
  
  }
  
  /* get project by id */
  getSpecificProject()
  {

    this.backendService.getProjectById(this.projectId)
    .pipe(first())
    .subscribe(
        data => {
         this.project = data.project[0]
         console.log(this.project)
        this.isDataLoaded=true;
        this.backendService.getProjectOwnerId(this.projectId) /* to check is the user is owner of project*/
        .pipe(first())
        .subscribe(
          response => {
           // debugger
            console.log(" project owner id :" + response.userId)
            console.log(" current user id :" + this.user_id)
            if (response.userId === this.user_id){
              this.isUser = true
              this.showError = "Oops! I'm sorry; you cannot comment on your own project"
            }
            else if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined){
              this.isUser = true
              this.showError = "Please login or Sign up First for your feedback"
            }
          
            else{
              this.isUser = false
              if (localStorage.getItem("againComment") === "notShow" ){
                
                this.commentAgain = false
                this.showError = "WARNING: you can comment only once"
              }
              
            }
          }
        )
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        })
  }

/* function used to comment on project*/
  PostComment(){
    
    this.isPost = true;
  console.log(this.comment);
  this.commentProjectForm.value.comment = this. comment ;
    if (this.like =="")
       this.commentProjectForm.value.like = "dislike"
    else
    this.commentProjectForm.value.like = this.like;
   
    this.backendService.commentProject(this.commentProjectForm.value ,this.projectId)
    .pipe(first())
    .subscribe(
        data => {
        
          localStorage.setItem("againComment","notshow")
        this.showComment = true ;
        if(localStorage.getItem("againComment") === "notshow" )
        this.commentAgain = true ;
        this.showError = "WARNING: You can comment only once";
       // localStorage.setItem("againComment","notshow")
         console.log(this.project)
      
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        })

  }

/*function to get comment on specific project*/
  GetCommentsOfProject(){
    this.backendService.getCommentsOnSpecificProject(this.projectId)
    .pipe(first())
    .subscribe(
        data => {
      
         this.reviewProjects = data.reviewProject;
           
         console.log(" comments data "+this.reviewProjects)
         console.log("comments data "+data.reviewProject)
         console.log ("date"+ data.reviewProject.createdAt)
         for (let i =0 ; i < data.reviewProject.length ; i++ ){
          console.log ("date"+ this.reviewProjects[i].createdAt.substring(0,10))
           if (data.reviewProject[i].like === "like")
           this.totalLikes ++ ;
         }
         console.log (" showing total likes :" + this.totalLikes)
        },
        // response => {
            
        //   console.log(" comment get result :" + response[0].comment)
        //   console.log(" current user id :" + this.user_id)
       
        // },
        error => {
            this.alertService.error(error);
            this.loading = false;
        })
  }
  logout(){
    localStorage.removeItem("token");
     localStorage.removeItem("userid")
    this.router.navigate(['/home']);
  }
  getToken(){
    if(localStorage.getItem("token") === null || localStorage.getItem("token") === undefined){
      this.router.navigate(['/home']);
    }
  }
}
