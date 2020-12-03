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
export class SignuppageComponent implements OnInit {

  registerNgoForm: FormGroup;
  registerDonorForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.registerNgoForm = this.formBuilder.group({
          email: ['',Validators.required],
          ngoName: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });

    this.registerDonorForm = this.formBuilder.group({
          email: ['',Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
       });
  }
  donorformshow:boolean=false;
  ngoFormShow:boolean=true;

  donorSingup(){
      this.donorformshow=true;
      this.ngoFormShow=false;
  }

  ngoSingup(){
    this.donorformshow=false;
      this.ngoFormShow=true;
  }



    // convenience getter for easy access to form fields
    get f() { return this.registerNgoForm.controls; }

    onNgoSubmit() {

        this.submitted = true;

       

        // stop here if form is invalid
        if (this.registerNgoForm.invalid) {
            return;
        }

        this.loading = true;
        this.backendService.registerNgo(this.registerNgoForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    onDonorSubmit() {

      this.submitted = true;
      
     

      // stop here if form is invalid
      if (this.registerDonorForm.invalid) {

          return;
      }

      this.loading = true;
      this.backendService.registerDonor(this.registerDonorForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }



}
