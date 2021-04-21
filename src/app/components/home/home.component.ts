import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { IProject  } from '../../_models/Iproject';
import { ICampaign  } from '../../_models/Icampaign';
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  projects: any
  campaigns: any
  currentTutorial = null;
  currentIndex = -1;
  title = '';
   

  constructor( private router:Router, private backendService: BackendService) { }
  showDetials(project){
    this.router.navigate(['projectdetails'],{ queryParams: { id: project._id } });
    
    
  
}
showDetialsCampaign(campaign){
  this.router.navigate(['campaigndetails'],{ queryParams: { id: campaign._id } });
  
  
}

  stars = Array(5);
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit(): void {
 
    this.backendService.getProjects()
        .pipe(first())
        .subscribe(
          data => {
            this.projects = data.projects;

          },
          error => {
            console.log(error);
          });
          /* get campaigns */ 
   this.backendService.getCampaigns()
        .pipe(first())
        .subscribe(
          data => {
            this.campaigns = data.campaigns;
            this.slides = this.chunk(this.campaigns, 3);

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

}
