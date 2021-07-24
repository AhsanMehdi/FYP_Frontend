import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { IProject  } from '../../_models/Iproject';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ngtimeline',
  templateUrl: './ngtimeline.component.html',
  styleUrls: ['./ngtimeline.component.scss']
})
export class NgtimelineComponent implements OnInit {
  campaigns: any /* array of projects*/
  projects:any
  ngos = []
  showChatbox = true;
 
  ngoss:any
 
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  showDomain: string ;
  searchText;
  totalCampaigns: number = 0;
  totalProjects: number = 0;
  /*below all three are used by the */ 
  pros: any;
  orgs: any;
  cams: any; 
  /* to show the name and the image of the ngo*/
  ngoImage;
  ngoName;
  ngo:any
  
  currentUserId: string ;
  constructor(private router:Router, private backendService: BackendService) { }

  ngOnInit(): void {
    this.totalCampaign();
    this.totalProject();
    this.showAllProjectNGOSORGS(); // this function to display values on the local area on side tabs
    this.getNgoBYUserId();
  }
  /*to get the name and image url of the corrsponding ngo*/
  getNgoBYUserId(){
    this.currentUserId = localStorage.getItem("userid") ;
    this.backendService.getNgoByUserId( this.currentUserId) /*get all campaigns*/
    .pipe(first())
    .subscribe(
      data => {
        this.ngo = data.ngo[0]
        this.ngoName = this.ngo.nickName
        this.ngoImage = this.ngo.imageUrl
        console.log(" ngo name is " + this.ngoName + " and image url is " + this.ngoImage)
      },
      error => {
        console.log(error);
      });
  }

  //////////////////////////////
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
    this.currentUserId = localStorage.getItem("userid") ;
    this.backendService.getProjectsSpecificUser( this.currentUserId) /*get all campaigns*/
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
        console.log(this.ngos)

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
