import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  editProfileForm: FormGroup;

  
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService
  ) { }
 /* function called on the call of html file */
  ngOnInit()  {
    this.editProfileForm = this.formBuilder.group({
   
      firstName: ['', Validators.required],  
      middleName: ['',Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(12)]],
      dob: ['', [Validators.required, Validators.minLength(12)]],
      cellNumber: ['', Validators.required],
      interestedDomain: ['', Validators.required],
      cnic: ['', Validators.required],
      country: ['', Validators.required],
      visibility: ['', Validators.required],
      occupation: ['', Validators.required]
  });

  }

  /* this function should be used in html file to get data*/ 
  onEditProfileSubmit() {

    console.log(this.editProfileForm.value)
    this.submitted = true;
    // stop here if form is invalid
    // if (this.registerUserForm.invalid) {
    //     return;
        
    // }
    this.loading = true;
    this.backendService.donorProfile(this.editProfileForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/donorhome']);
              
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }
}