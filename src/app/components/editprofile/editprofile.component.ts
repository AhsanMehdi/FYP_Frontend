import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'
import { IDonorProfile } from "../../_models/Idonorprofile";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  editProfileForm: FormGroup;
  validatingForm: FormGroup; /*for validations*/
  imageSrc; // for saving the profile image of ngo
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService,
    private toastr: ToastrService
  ) { }
 /* function called on the call of html file */
  ngOnInit()  {
    this.editProfileForm = this.formBuilder.group({
   
     
      nickName: ['', [Validators.required, Validators.minLength(12)]],
      //dob: ['', [Validators.required, Validators.minLength(12)]],
      contactNumber: ['', Validators.required],
     // cnic: ['', Validators.required],
      country: ['', Validators.required],
      //visibility: ['', Validators.required],
      //occupation: ['', Validators.required],
      domainHealth:  [false],
      domainEducation:  [false],
      domainOrphanage:  [false],
      domainEnvironment:  [false],
      domainSocialWelfare:  [false],
      domainOther:  [false],
      imageUrl: ['', Validators.required]
      // _id : ["123"]
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
   // this.editProfileForm.get('imageUrl').setValue(this.imageSrc)
    this.backendService.ngoProfile(this.editProfileForm.value)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate(['/nghome']);
              //   this.alertService.success('Information Updated', true);
              //   // this.router.navigate(['/editprofile']);
              //  var  req = {
              //     nickName: this.editProfileForm.controls['nickName'].value,
              //     //dob: ['', [Validators.required, Validators.minLength(12)]],
              //     contactNumber:this.editProfileForm.controls['contactNumber'].value,
              //    // cnic: ['', Validators.required],
              //     country: this.editProfileForm.controls['country'].value,
              //     //visibility: ['', Validators.required],
              //     //occupation: ['', Validators.required],
              //     domainHealth:   this.editProfileForm.controls['domainHealth'].value,
              //     domainEducation: this.editProfileForm.controls['domainEducation'].value,
              //     domainOrphanage: this.editProfileForm.controls['domainOrphanage'].value,
              //     domainEnvironment:  this.editProfileForm.controls['domainEnvironment'].value,
              //     domainSocialWelfare:  this.editProfileForm.controls['domainSocialWelfare'].value,
              //     domainOther:  this.editProfileForm.controls['domainOther'].value,
              //     _id : data['ngoProfile']['_id']
              //   }

              // this.editProfileForm.controls['_id'].setValue(data['ngoProfile']['_id'])
                // this.backendService.ngoProfileUpdate(this.editProfileForm.value)
                // .pipe(first())
                // .subscribe(
                //   response =>
                //   {
                //     this.toastr.success('Success!', 'Profile updated successfully!');
                //     this.router.navigate(['/nghome']);
                //   }
                // )
              
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
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
  onImageChange(event){ // to upload image

    const image: File = <File>event.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(image);
    reader.onload = (event: any) => {
			this.imageSrc = reader.result;
      console.log("image source : " + this.imageSrc)
		};
  }
}
