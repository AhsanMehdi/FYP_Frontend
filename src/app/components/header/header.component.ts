import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showTrnsaparent = true
  public showLogout;
  token: string
  constructor(  private fb: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService) {


    if ((window.location.href != "http://localhost:4200/signuppage") ) {

      this.showTrnsaparent=true
    }

    console.log( window.location.href);
   }

  ngOnInit(): void {
  
   
    this.token = localStorage.getItem("token")
    if (this.token != null)
    this.showLogout = true;
   // location.reload();
    console.log (" showlogout" + this.showLogout)
    console.log("is token "+ localStorage.getItem("token"))
    
   // this.getToken();
  }
  logout(){
    localStorage.removeItem("token");
     localStorage.removeItem("userid")
     this.showLogout = false;
    this.router.navigate(['/home']);
  }
  getToken(){
    if(localStorage.getItem("token") === null || localStorage.getItem("token") === undefined){
      this.router.navigate(['/home']);
    }
  }

}