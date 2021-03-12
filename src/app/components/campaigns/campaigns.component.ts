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

}
