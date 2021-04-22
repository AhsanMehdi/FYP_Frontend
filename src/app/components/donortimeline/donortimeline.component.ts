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
  
  currentUserId: string ;
  constructor(private router:Router, private backendService: BackendService) { }

  ngOnInit(): void {
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
  

}
