import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'
import { ChatAdapter } from 'ng-chat';
import { DemoAdapter } from './my-adapter';


@Component({
  selector: 'app-nghome',
  templateUrl: './nghome.component.html',
  styleUrls: ['./nghome.component.scss']
})
export class NghomeComponent implements OnInit {

  title = 'ng-uikit-pro-standard';
  userId = 1;
  ngos = []
  showChatbox = true;
  projects: any /* array of projects*/
  ngoss:any

  public adapter: ChatAdapter;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService
  ) { }


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
    this.showChatbox = false;
    this.initChatBox()
    this.getToken();
  }
   initChatBox() {
    this.backendService.getNgos() /*get all ngos*/
    .subscribe(
      data => {
     

        this.adapter =   new DemoAdapter(data.ngoProfile,this.backendService);

        console.log(this.adapter)
      

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

   openChatBox(){

    this.showChatbox = true;
  }
   ngoeditprofile(){
     
    //this.backendService.ngoProfileUpdate() ;

   }
}
