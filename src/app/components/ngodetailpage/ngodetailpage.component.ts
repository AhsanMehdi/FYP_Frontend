import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { first } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-ngodetailpage',
  templateUrl: './ngodetailpage.component.html',
  styleUrls: ['./ngodetailpage.component.scss']
})
export class NgodetailpageComponent implements OnInit {

  ngoId: string
  ngo:any
  isDataLoaded=false
  constructor(   private route: ActivatedRoute,
    private router: Router, private backendService: BackendService,  private alertService: AlertService) {
      this.ngoId = this.route.snapshot.queryParams.id;
      console.log (this.ngoId)
  
      
     }
     loading = false;


  ngOnInit(): void {
    console.log (" in ngonint")
    this.backendService.getNgoById(this.ngoId)
    .pipe(first())
    .subscribe(
        data => {
         this.ngo = data.ngo[0]
         console.log(this.ngo)
         console.log("I am in getting ngo data")
        this.isDataLoaded=true

         
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        })
  }


}