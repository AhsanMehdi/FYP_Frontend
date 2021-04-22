import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ICampaign  } from '../../_models/Icampaign';
import { Router } from '@angular/router'

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  campaigns: any /* array of projects*/
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  showDomain: string ;
  searchText;
  
  constructor(private router:Router, private backendService: BackendService) { }
  showDetials(campaign){  /*when a user click on readmore button then it works*/
    this.router.navigate(['campaigndetails'],{ queryParams: { id: campaign._id } });
    
    
  }
  ngOnInit(): void {
    this.backendService.getCampaigns() /*get all campaigns*/
    .pipe(first())
    .subscribe(
      data => {
        this.campaigns = data.campaigns;

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
  getCampaignByDomain(domain:string){
    console.log("given domain is :"+ domain)
    this.backendService.getCampaignByDomain(domain) /*get all projects*/
    .pipe(first())
    .subscribe(
      data => {
        console.log(data)

        this.campaigns = data.campaign;
        console.log ("showing campaigns"+ this.campaigns.projectType)

      },
      error => {
        console.log(error);
      });

  }
  urgentCampaigns(status: string){ /*function call when click on urgent campaigns*/
    this.backendService.getCampaignByStatus(status) /*get all campaigns*/
    .pipe(first())
    .subscribe(
      data => {
        this.campaigns = data.campaign;

      },
      error => {
        console.log(error);
      });

  }

}
