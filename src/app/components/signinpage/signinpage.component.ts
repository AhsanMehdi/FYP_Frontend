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
export class SigninpageComponent implements OnInit {


  siginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService) { }

  ngOnInit() {

    this.siginForm = this.formBuilder.group({
          email: ['',Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
       });
  }






    // convenience getter for easy access to form fields
    get f() { return this.siginForm.controls; }



    onSigninSubmit() {

      this.submitted = true;
      
     

      // stop here if form is invalid
      if (this.siginForm.invalid) {

          return;
      }
      this.router.navigate(['/donorhome']);

      // this.loading = true;
      // this.backendService.registerDonor(this.siginForm.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //             this.alertService.success('Registration successful', true);
      //             this.router.navigate(['/']);
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });
  }



}
