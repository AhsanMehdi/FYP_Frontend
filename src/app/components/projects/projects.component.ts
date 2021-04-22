import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { IProject  } from '../../_models/Iproject';
import { Router } from '@angular/router'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any /* array of projects*/
  project:any
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
  getProjectByDomain(domain:string){
    console.log("given domain is :"+ domain)
    this.backendService.getProjectByDomain(domain) /*get all projects*/
    .pipe(first())
    .subscribe(
      data => {
        console.log(data)

        this.projects = data.project;
        console.log ("showing projects"+ this.projects.projectType)

      },
      error => {
        console.log(error);
      });

  }
  mostLiked(){ /*projects having highest number of likes*/

  }
  topFunded(){ /*projects received higest funds*/
  debugger
    this.backendService.getProjects() /*get all projects*/
    .pipe(first())
    .subscribe(
      data => {
        console.log(data)
        for (let i =0 ; i < data.projects.length ; i++ ){
        
           if (data.projects[i].estimatedBudget > 100000 ){
             
           this.project[i] = data.projects[i]; 
           console.log(this.project[i].estimatedBudget)
          }
         }
    

      },
      error => {
        console.log(error);
      });
  }

}
