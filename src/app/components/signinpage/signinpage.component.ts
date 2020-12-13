import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.scss']
})
export class SigninPageComponent implements OnInit {
  signInForm: FormGroup;
  
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({  
      email: ['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(12)]]
  });
  }
   // -----ng onint ends 
 signinformshow:boolean=true;
 userSingIn(){
  this.signinformshow=true;

}

 // convenience getter for easy access to form fields
 get f() { return this.signInForm.controls; }

 onSignInSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  // if (this.registerUserForm.invalid) {
  //     return;
      
  // }
  this.loading = true;
  this.backendService.signIn(this.signInForm.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/']);
              console.log (this.signInForm.value);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}
}
