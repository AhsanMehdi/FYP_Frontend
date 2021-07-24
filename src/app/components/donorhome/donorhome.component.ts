import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'
import { ChatAdapter } from 'ng-chat';
import { DemoAdapter } from './my-adapter';

@Component({
  selector: 'app-donorhome',
  templateUrl: './donorhome.component.html',
  styleUrls: ['./donorhome.component.scss']
})
export class DonorhomeComponent implements OnInit {
  projects:any
  ngosss:any
  showChatbox = true;
  ngoss:any
  userId = 1;
  ngos = []
  public adapter: ChatAdapter;
  constructor(  private router: Router,private fb: FormBuilder,
   
    private backendService: BackendService,
    private alertService: AlertService) { }
    showDetials(project){  /*when a user click on readmore button then it works*/
      this.router.navigate(['projectdetails'],{ queryParams: { id: project._id } });
       
    }


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
        this.ngosss = data.ngoProfile;
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
}
