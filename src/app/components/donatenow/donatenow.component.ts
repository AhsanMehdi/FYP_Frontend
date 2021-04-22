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
  selector: 'app-donatenow',
  templateUrl: './donatenow.component.html',
  styleUrls: ['./donatenow.component.scss']
})
export class DonatenowComponent implements OnInit {

  projectId: any
  ownerId:any
  profiles:any /*variable to get the profile of a user*/
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router, private backendService: BackendService,
      private alertService: AlertService) {
    this.projectId = this.route.snapshot.queryParams.id;
    console.log("the id of project is "+this.projectId)
   }


  ngOnInit(): void {
    this.getProjectOwnerId() ; 
    this.getUserProfiles() ;
  }
  
  getProjectOwnerId(){ /*function to get the user id of whom who created the project*/
    console.log("function getting owner id")
    this.backendService.getProjectOwnerId(this.projectId) /* to check is the user is owner of project*/
    .pipe(first())
    .subscribe(
      data => {  
        console.log(" project owner id :" + data.userId)
        this.ownerId = data.userId ;
      },
        error => {
            this.alertService.error(error);
           
        })
  }

  getUserProfiles(){ /* this function will return the profile data of specific user*/
    console.log("function getting profiles")
    this.backendService.getNgoByUserId(this.ownerId)
    .pipe(first())
    .subscribe(
        data => {
       this.profiles = data.ngoprofile ;
       console.log(data)
       console.log("profile info is "+ this.profiles)
       console.log("other info is "+ data.ngoprofile) 
      
        },
        error => {
            this.alertService.error(error);
       
        })

  }

}
