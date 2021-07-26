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
  public rating = 0 ; // setting rating
  public runrated = 10;
//  public totalrating  = 0 ; // setting rating total
 //  public totalother =0;
  public xyz=0;
  
  projectId: string
  ngoId: string
  ngoUserID: string //for storing the userID 
  userProjectsbyUserId:any
  ngo:any
  ngos:any
  nickName:string
  country:string
  imageUrl: string // to save the image of the ngo
  contactNumber:string
  campaigns:any
  projects:any
  totalCampaigns: number = 0;
  totalProjects: number = 0;
  totalrating: number=0;
  totalother: number=0;
  userid:string
  public showDonate;
  currentUserId: string ;
  inprogressProjects: number = 0 ;
  
  isDataLoaded=false
  totalprojectsofuser: number = 0;
  constructor(   private route: ActivatedRoute,
    private router: Router, private backendService: BackendService,  private alertService: AlertService) {
      this.ngoId = this.route.snapshot.queryParams.id;
      console.log (this.ngoId)
  
      
     }
     loading = false;

     counter(i: number) {
      return new Array(i);
  }
  
  ngOnInit(): void {
    this.totalProject();
    this.userProjects();
    //this.getProjectRating();
    this.getUserIDbyID();
   // this.getProjectsSpecificUser();
    this.totalCampaign();
    console.log (" in ngonint")
   
    this.backendService.getNgoById(this.ngoId)
   
    .pipe(first())
    .subscribe(
        data => {
          console.log(data.ngo[0])
         this.ngo = data.ngo[0]
         this.nickName = this.ngo.nickName
         this.country = this.ngo.country
         this.contactNumber=this.ngo.contactNumber
         this.imageUrl=this.ngo.imageUrl
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
  
  //   getProjectRating(){
  //   this.backendService.getProjectRatingById(this.projectId)
  //   .pipe(first())
  //   .subscribe(
  //       data => {

  //         this.rating = data.rating
  //         this.runrated = 10 - data.rating
  //         console.log("rating ",data.rating)
  //       })
  // }
  getUserIDbyID(){
    this.backendService.getNgoUserId( this.ngoId) /*get all projects of current user*/
    .pipe(first())
    .subscribe(
      data => {
        console.log ("collected user id is "+ data.userId)
        this.backendService.getProjectsSpecificUser(data.userId)
        .pipe(first())
        .subscribe(
          data => {
            this.userProjectsbyUserId = data.project;
            for (let i =0 ; i < data.project.length ; i++ ){
              this.totalProjects ++ ;
            }
            console.log("collected project is "+data.project );
            console.log("collected project is "+ this.userProjectsbyUserId );
            console.log("length of array"+this.userProjectsbyUserId.length);
            //
            // this.totalother=this.userProjectsbyUserId.length;
            // this.totalrating= this.totalrating/this.totalother;
            // this.runrated=10-this.totalrating;
            // console.log("runrated ye ha "+this.runrated)
            // console.log("run rating ",this.totalrating)

            for(let xz=0;xz<=this.userProjectsbyUserId.length;xz++)
            {
              if(xz!=this.userProjectsbyUserId.length){
                this.backendService.getProjectRatingById(this.userProjectsbyUserId[xz]._id)
                .pipe(first())
                .subscribe(
                    data => { 
                      //this.rating = data.rating
                      this.xyz=data.rating
                      this.totalrating = this.totalrating+ this.xyz
                      this.totalother=this.totalother+1
                      console.log("original rating ",data.rating)
                      console.log("total rating ",this.totalrating)
                      console.log("total other ",this.totalother)
                      if(xz==this.userProjectsbyUserId.length-1)
                      {
                        this.rating=Math.floor(this.totalrating/this.totalother);
                        this.runrated=10-this.rating;
                        console.log("inside xz--")
                        console.log("rating in calculate rating"+this.rating)
                        console.log("runrating in calculate rating"+this.runrated)
                        console.log("totalrating in calculate rating"+this.totalrating)
                        console.log("totalother in calculate rating"+this.totalother)
                          
                      }
                    },
                    error => {
                      console.log(error);
                    });  
              }
              else{
                //sad
                                      
              }
            }
//            this.calculateRating();
   
            console.log("this is fake ",this.totalrating)
//            this.totalother=this.userProjectsbyUserId.length;
            // this.totalrating= this.totalrating/this.userProjectsbyUserId.length;
            // this.runrated=11-this.totalrating;
            // console.log("runrated ye ha "+this.runrated)
            // console.log("run rating ",this.totalrating)
            
          },
          error => {
            console.log(error);
          });
          
      },
      error => {
        console.log(error);
      });

  }
  // this function will return all the projects of a user by user id of ngo
  // getProjectsSpecificUser(){
      
  // this.backendService.getProjectsSpecificUser(this.ngoUserID)
  // .pipe(first())
  // .subscribe(
  //   data => {
  //     this.userProjectsbyUserId = data.project;
  //     console.log("collected project is "+data.project );
  //   },
  //   error => {
  //     console.log(error);
  //   });

  // }
  calculateRating(){
 //   var quotient = Math.floor(y/x);
    console.log("totalrating in calculate rating"+this.totalrating)
    console.log("totalother in calculate rating"+this.totalother)
    
    this.rating=Math.floor(this.totalrating/this.totalother);
    this.runrated=10-this.rating;
    console.log("rating in calculate rating"+this.rating)
    console.log("runrating in calculate rating"+this.runrated)
    
  }


  userProjects(){
    this.backendService.getProjectsSpecificUser( this.ngoUserID) /*get all projects of current user*/
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
  //this.ngoUserID = data.userIDD;
        
  pressDonate(){
    this.userid = localStorage.getItem("userid")
    if (this.userid === this.ngoId)
    this.showDonate = false

  }
  totalCampaign(){
    this.currentUserId = localStorage.getItem("userid") ;
    this.backendService.getCampaignsSpecificUser( this.currentUserId) /*get all campaigns*/
    .pipe(first())
    .subscribe(
      data => {
        this.campaigns = data.campaign;
        console.log("user created campaigns:"+data.campaign)
        for (let i =0 ; i < data.campaign.length ; i++ ){
           this.totalCampaigns ++ ;
         }

      },
      error => {
        console.log(error);
      });
  }
  totalProject(){
    this.backendService.getNgoUserId( this.ngoId) /*get all projects of current user*/
    .pipe(first())
    .subscribe(
      data => {
         console.log ("user id collected is" + data.userId)
        this.backendService.getProjectsSpecificUser(data.userId) /*get all campaigns*/
    
        .pipe(first())
        .subscribe(
          data => {
            this.projects = data.project;
            console.log("user created projects:"+data.project)
       
    
    
          },
          error => {
            console.log(error);
          });

        
        // this.projects = data.project;
        // console.log("user projects: "+ data.project)
        // for (let i =0 ; i < data.project.length ; i++ ){
         
        //    this.inprogressProjects ++ ;
        //  }
        // console.log ("total projects :"+ this.inprogressProjects)
      },
      error => {
        console.log(error);
      });


    this.currentUserId = localStorage.getItem("userid") ;
    this.backendService.getProjectsSpecificUser(this.ngoId) /*get all campaigns*/
    
    .pipe(first())
    .subscribe(
      data => {
        this.projects = data.project;
        console.log("user created projects:"+data.project)
        for (let i =0 ; i < data.project.length ; i++ ){
           this.totalProjects ++ ;
         }


      },
      error => {
        console.log(error);
      });
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