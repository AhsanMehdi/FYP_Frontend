import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { first } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projectId: string
  project:any
  isDataLoaded=false
  constructor(   private route: ActivatedRoute,
    private router: Router, private backendService: BackendService,  private alertService: AlertService) {
      this.projectId = this.route.snapshot.queryParams.id;
        
     }
     loading = false;

  ngOnInit(): void {
    this.backendService.getProjectById(this.projectId)
    .pipe(first())
    .subscribe(
        data => {
         this.project = data.project[0]
         console.log(this.project)
        this.isDataLoaded=true
      
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        })
  }
}
