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

  public adapter: ChatAdapter;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService
  ) { }


  ngOnInit(): void {
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
