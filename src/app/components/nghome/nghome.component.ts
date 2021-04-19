import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nghome',
  templateUrl: './nghome.component.html',
  styleUrls: ['./nghome.component.scss']
})
export class NghomeComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService
  ) { }


  ngOnInit(): void {
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
   ngoeditprofile(){
     
    //this.backendService.ngoProfileUpdate() ;

   }
}
