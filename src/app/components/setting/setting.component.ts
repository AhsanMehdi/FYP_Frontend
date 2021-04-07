import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})

export class SettingComponent implements OnInit {
  
  registerUserForm: FormGroup;
  loginUserForm: FormGroup;
  
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.registerUserForm = this.formBuilder.group({
          //userType: ['', Validators.required],
          email: ['',Validators.required],
          password: ['', [Validators.required, Validators.minLength(12)]],
      });

  }
 // -----ng onint ends 
 signupformshow:boolean=true;
 userSingup(){
  this.signupformshow=true;

}
 // convenience getter for easy access to form fields
    get f() { return this.registerUserForm.controls; }

 // ngOnSubmit Function
 onSignUpSubmit() {

  console.log(this.registerUserForm.value)
  this.submitted = true;

  this.loading = true;
  this.backendService.updatePassword(this.registerUserForm.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Password updated', true);
              this.router.navigate(['/signinpage']);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
       }
}
