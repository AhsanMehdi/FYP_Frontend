import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ICampaign  } from '../../_models/Icampaign';
import { Router } from '@angular/router'

@Component({
  selector: 'app-domseacomp',
  templateUrl: './domseacomp.component.html',
  styleUrls: ['./domseacomp.component.scss']
})
export class DomseacompComponent implements OnInit {

  campaigns: any /* array of campaigns*/
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  loading = false;
  submitted = false;
  choiceForm: FormGroup; // for the choice of a domain
  constructor(private router:Router, private backendService: BackendService,  private formBuilder: FormBuilder) { }
  // function to show details of a campaign
  showDetials(campaign){  /*when a user click on readmore button then it works*/
    this.router.navigate(['campaigndetails'],{ queryParams: { id: campaign._id } });
    
    
  }
  // default call of an ng oninit
  ngOnInit(): void {
    this.choiceForm = this.formBuilder.group({
      //userType: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }

  // function call when the domain is selected
  onDomainSelection(): void {
    this.submitted = true;
    // stop here if form is invalid
    // if (this.registerUserForm.invalid) {
    //     return;
        
    // }
    console.log(this.choiceForm.value)
    this.loading = true;
    this.backendService.getCampaignByDomain(this.choiceForm.value) /*get all campaigns*/
    .pipe(first())
    .subscribe(
      data => {
        this.campaigns = data.campaigns;
        //console.log(data.campaigns)

      },
      error => {
        console.log(error);
      });
  }


}
