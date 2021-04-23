import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'
import { ChatAdapter } from 'ng-chat';

@Component({
  selector: 'app-donorhome',
  templateUrl: './donorhome.component.html',
  styleUrls: ['./donorhome.component.scss']
})
export class DonorhomeComponent implements OnInit {
  projects:any
  ngos:any
  constructor(  private router: Router,private fb: FormBuilder,
   
    private backendService: BackendService,
    private alertService: AlertService) { }


  ngOnInit(): void {
    this.backendService.getProjects() /*get all projects*/
    .pipe(first())
    .subscribe(
      data => {
        this.projects = data.projects;
        this.backendService.getNgos() /*get all ngos*/
    .pipe(first())
    .subscribe(
      data => {
        this.ngos = data.ngoProfile;
        console.log(this.ngos)

      },
      error => {
        console.log(error);
      });

      },
      error => {
        console.log(error);
      });
   this.getToken();
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
