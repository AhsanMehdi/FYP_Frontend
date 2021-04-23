import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { first } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-ngodetails',
  templateUrl: './ngodetails.component.html',
  styleUrls: ['./ngodetails.component.scss']
})
export class NgoDetailsComponent implements OnInit {

  ngoId: string
  ngo:any
  ngos:any
  campaigns:any
  projects:any
  userid:string
  public showDonate;
  inprogressProjects: number = 0 ;
  isDataLoaded=false
  constructor(   private route: ActivatedRoute,
    private router: Router, private backendService: BackendService,  private alertService: AlertService) {
      this.ngoId = this.route.snapshot.queryParams.id;
      console.log (this.ngoId)
  
      
     }
     loading = false;


  ngOnInit(): void {
    console.log (" in ngonint")
    this.backendService.getNgoById(this.ngoId)
   
    .pipe(first())
    .subscribe(
        data => {
          console.log(data.ngo[0])
         this.ngo = data.ngo[0]
         console.log(this.ngo)
         console.log("I am in getting ngo data")
        this.isDataLoaded=true
        this.backendService.getCampaigns() /*get all campaigns*/
    .pipe(first())
    .subscribe(
      data => {
        this.campaigns = data.campaigns;
        this.backendService.getNgos() /*get all ngos*/
    .pipe(first())
    .subscribe(
      data => {
        this.ngos = data.ngoProfile;
        console.log(this.ngos)
        this.backendService.getProjects() /*get all projects*/
    .pipe(first())
    .subscribe(
      data => {
        this.projects = data.projects;

      },
      error => {
        console.log(error);
      });

      },
      error => {
        console.log(error);
      });

      },
      error => {
        console.log(error);
      });

         
        },
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
  userProjects(){
    this.backendService.getProjectsSpecificUser( this.ngoId) /*get all projects of current user*/
    .pipe(first())
    .subscribe(
      data => {
       
        this.projects = data.project;
        console.log("user projects: "+ data.project)
        for (let i =0 ; i < data.project.length ; i++ ){
         
           this.inprogressProjects ++ ;
         }
        console.log ("total projects :"+ this.inprogressProjects)
      },
      error => {
        console.log(error);
      });
  }
  pressDonate(){
    this.userid = localStorage.getItem("userid")
    if (this.userid === this.ngoId)
    this.showDonate = false

  }

}