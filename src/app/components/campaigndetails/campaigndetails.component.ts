import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { first } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-campaigndetails',
  templateUrl: './campaigndetails.component.html',
  styleUrls: ['./campaigndetails.component.scss']
})
export class CampaignDetailsComponent implements OnInit {

  campaignId: string
  campaign:any
  isDataLoaded=false
  constructor(   private route: ActivatedRoute,
    private router: Router, private backendService: BackendService,  private alertService: AlertService) {
      this.campaignId = this.route.snapshot.queryParams.id;
      console.log (this.campaignId)
  
      
     }
     loading = false;


  ngOnInit(): void {
    this.backendService.getCampaignById(this.campaignId)
    .pipe(first())
    .subscribe(
        data => {
         this.campaign = data.campaign[0]
         console.log(this.campaign)
         console.log("I am in getting campaign data")
        this.isDataLoaded=true

         
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        })
  }


}