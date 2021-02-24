import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ngoeditprofile',
  templateUrl: './ngoeditprofile.component.html',
  styleUrls: ['./ngoeditprofile.component.scss']
})
export class NgoeditprofileComponent implements OnInit {

  NgoeditProfileForm: FormGroup;

  
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
    this.NgoeditProfileForm = this.formBuilder.group({
   
      firstName: ['', Validators.required],  
      middleName: ['',Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(12)]],
      dob: ['', [Validators.required, Validators.minLength(12)]],
      cellNumber: ['', Validators.required],
      interestedDomain: ['', Validators.required],
      cnic: ['', Validators.required],
      country: ['', Validators.required],
      visibility: ['', Validators.required],
      occupation: ['', Validators.required],
      domainHealth:  ['', Validators.required],
      domainEducation:  ['', Validators.required],
      domainOrphanage:  ['', Validators.required],
      domainEnvironment:  ['', Validators.required],
      domainSocialWelfare:  ['', Validators.required],
      domainOther:  ['', Validators.required]
  });

  }

  /* this function should be used in html file to get data*/ 
  onNgoEditProfileSubmit() {

    console.log(this.NgoeditProfileForm.value)
    this.submitted = true;
    // stop here if form is invalid
    // if (this.registerUserForm.invalid) {
    //     return;
        
    // }
    this.loading = true;
    this.backendService.donorProfile(this.NgoeditProfileForm.value)
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
