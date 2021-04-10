import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { IProject  } from '../../_models/Iproject';
import { Router } from '@angular/router'

@Component({
  selector: 'app-createdprojects',
  templateUrl: './createdprojects.component.html',
  styleUrls: ['./createdprojects.component.scss']
})
export class CreatedprojectsComponent implements OnInit {
  projects: any /* array of projects*/
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  searchText;
  constructor(private router:Router, private backendService: BackendService) { }
  showDetials(project){  /*when a user click on readmore button then it works*/
    this.router.navigate(['projectdetails'],{ queryParams: { id: project._id } });
    
    
  }
  ngOnInit(): void {
    this.backendService.getProjects() /*get all projects*/
    .pipe(first())
    .subscribe(
      data => {
        this.projects = data.projects;

      },
      error => {
        console.log(error);
      });
  }

}
