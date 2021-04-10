import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'
import { IDonorProfile } from "../../_models/Idonorprofile";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  editProfileForm: FormGroup;
  validatingForm: FormGroup; /*for validations*/

  
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService
  ) { }
  ngOnInit()  {
    this.editProfileForm = this.formBuilder.group({
   
      userName: ['', Validators.required],  
      password: ['',Validators.required, Validators.minLength(8)],
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
                this.alertService.success('Settings applied', true);
                this.router.navigate(['/setting']);
              
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }
}

