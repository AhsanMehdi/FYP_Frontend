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
  selector: 'app-participatenow',
  templateUrl: './participatenow.component.html',
  styleUrls: ['./participatenow.component.scss']
})
export class ParticipatenowComponent implements OnInit {


  campaignId:any  /*when click on participate now*/
  ownerId:any
  profiles:any /*variable to get the profile of a user*/
  callProfileFunction: boolean = false ;
  ownerName:string
  ownerLocation:string
  ownerContact:string
  ownerEmail:string
  userType:string
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router, private backendService: BackendService,
      private alertService: AlertService) {
 
    this.campaignId = this.route.snapshot.queryParams.id;
   
    console.log("id of campaign is: "+ this.campaignId)
   }


  ngOnInit(): void {

    this.getCampaignOwnerId(); // when campaign
    console.log ("is campaign id is null  ::"+ this.campaignId)
    
 
    // if (this.callProfileFunction == true)
    // this.getUserProfiles() ;
  }


  getCampaignOwnerId(){ /* it will work if user want to participate in a specific campaign*/
    console.log ("oh this is campaign here ::")
    this.backendService.getCampaignOwnerId(this.campaignId) /* to check is the user is owner of campaign*/
    .pipe(first())
    .subscribe(
        data => {
        this.ownerId = data.userId ;
        /*now it need to check if the user is donor or ngo*/
        console.log("now going to check  user type::" + this.ownerId)
        this.checkUserType() ;
      
        },
        error => {
            this.alertService.error(error);
       
        })
  }

  checkUserType(){ /*function to check user type*/
    this.backendService.getUserTypeByUserId(this.ownerId) /* to check is the user is owner of campaign*/
    .pipe(first())
    .subscribe(
        data => {
          console.log("value of data is : "+ data)
          console.log(data.user[0].userType)
          
        this.userType = data.user[0].userType ;
        this.ownerEmail = data.user[0].email;
        console.log ("user is : "+ this.userType+ " and email is ::"+ this.ownerEmail)
        /*now it need to check if the user is donor or ngo then call respective functions*/
        if (this.userType === "ngo")
        this.getNgoProfiles();
        else if (this.userType === "donor")
        this.getDonorProfiles();
        
        
        },
        error => {
            this.alertService.error(error);
       
        })
  }
  getDonorProfiles(){ /* this function will return the profile data of specific user*/
    console.log("function getting donor profiles")
    console.log("calling backend service with id is "+this.ownerId )
    this.backendService.getDonorByUserId(this.ownerId)
    .pipe(first())
    .subscribe(
        data => {
       this.profiles = data.donor[0] ;
       this.ownerName = this.profiles.firstName;
       this.ownerLocation = this.profiles.country;
       this.ownerContact = this.profiles.cellNumber;
       console.log ("user data : " + this.ownerName +this.ownerLocation  + this.ownerContact + this.ownerEmail)
       console.log(data)
       console.log("profile info is "+ this.profiles)
       console.log("other info is "+ data.donor[0]) 
      
        },
        error => {
            this.alertService.error(error);
       
        })

  }
  getNgoProfiles(){ /* this function will return the profile data of specific user*/
    console.log("function getting profiles")
    console.log("calling backend service with id is "+this.ownerId )
    this.backendService.getNgoByUserId(this.ownerId)
    .pipe(first())
    .subscribe(
        data => {
       this.profiles = data.ngo[0] ;
       this.ownerName = this.profiles.nickName;
       this.ownerLocation = this.profiles.country;
       this.ownerContact = this.profiles.contactNumber;
       console.log ("user data : " + this.ownerName +this.ownerLocation  + this.ownerContact+ this.ownerEmail)
       console.log(data)
       console.log("profile info is "+ this.profiles)
       console.log("other info is "+ data.ngo[0]) 
      
        },
        error => {
            this.alertService.error(error);
       
        })

  }


}
