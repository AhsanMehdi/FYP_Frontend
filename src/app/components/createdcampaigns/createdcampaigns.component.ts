import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ICampaign  } from '../../_models/Icampaign';
import { Router } from '@angular/router'

@Component({
  selector: 'app-createdcampaigns',
  templateUrl: './createdcampaigns.component.html',
  styleUrls: ['./createdcampaigns.component.scss']
})
export class CreatedcampaignsComponent implements OnInit {
  campaigns: any /* array of projects*/
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  showDomain: string ;
  searchText;
  
  currentUserId: string ;
  constructor(private router:Router, private backendService: BackendService) { }
  showDetials(campaign){  /*when a user click on readmore button then it works*/
    this.router.navigate(['campaigndetails'],{ queryParams: { id: campaign._id } });
    
    
  }
  ngOnInit(): void {
    this.currentUserId = localStorage.getItem("userid") ;
    this.backendService.getCampaignsSpecificUser( this.currentUserId) /*get all campaigns*/
    .pipe(first())
    .subscribe(
      data => {
        this.campaigns = data.campaign;
        console.log("user created campaigns:"+data.campaign)

      },
      error => {
        console.log(error);
      });
  }

}
