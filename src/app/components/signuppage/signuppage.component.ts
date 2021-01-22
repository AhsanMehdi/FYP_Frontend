import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss']
})
export class SignupPageComponent implements OnInit {
  
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
          name: ['', Validators.required],  
          email: ['',Validators.required],
          password: ['', [Validators.required, Validators.minLength(12)]],
          userType: ['', [Validators.required, Validators.minLength(12)]]
      });
    //   this.loginUserForm = this.formBuilder.group({  
    //     email: ['',Validators.required],
    //     password: ['', [Validators.required, Validators.minLength(12)]]
    // });


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
  // stop here if form is invalid
  // if (this.registerUserForm.invalid) {
  //     return;
      
  // }
  this.loading = true;
  this.backendService.signUp(this.registerUserForm.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Registration successful', true);
              if (this.registerUserForm.value.userType == "donor")
              this.router.navigate(['/signinpage']);
              if (this.registerUserForm.value.userType == "ngo")
              this.router.navigate(['/signinpage']);
              console.log (this.registerUserForm.value);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}



}
