import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { IProject  } from '../../_models/Iproject';
import { Router } from '@angular/router'

@Component({
  selector: 'app-donortimeline',
  templateUrl: './donortimeline.component.html',
  styleUrls: ['./donortimeline.component.scss']
})
export class DonortimelineComponent implements OnInit {
  campaigns: any /* array of projects*/
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  showDomain: string ;
  searchText;
  totalCampaigns: number = 0;
    /*below all three are used by the */ 
    pros: any;
    orgs: any;
    cams: any; 
    donorImage;
  donorName;
  donor:any
  currentUserId: string ;
  constructor(private router:Router, private backendService: BackendService) { }

  ngOnInit(): void {
    this.getDonorBYUserId();
    this.showAllProjectNGOSORGS(); // this function to display values on the local area on side tabs
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
    /*to get the name and image url of the corrsponding ngo*/
    getDonorBYUserId(){
      this.currentUserId = localStorage.getItem("userid") ;
      this.backendService.getDonorByUserId( this.currentUserId) /*get all campaigns*/
      .pipe(first())
      .subscribe(
        data => {
          this.donor= data.donor[0]
          this.donorName = this.donor.firstName
          //this.donorImage = this.donor.imageUrl
          console.log(" donor name is " + this.donorName )
        },
        error => {
          console.log(error);
        });
    }
  showAllProjectNGOSORGS(){
    
    this.backendService.getProjects() /*get all projects*/
    .pipe(first())
    .subscribe(
      data => {
        this.pros = data.projects;
        
        this.backendService.getNgos() /*get all ngos*/
        
    .pipe(first())
    .subscribe(
      data => {
        this.orgs = data.ngoProfile;
     

      },
      error => {
        console.log(error);
      });

      },
      error => {
        console.log(error);
      });
      this.backendService.getCampaigns() /*get all campaigns*/
    .pipe(first())
    .subscribe(
      data => {
        this.cams = data.campaigns;
      },
    
    error => {
      console.log(error);
    });
  }
}
