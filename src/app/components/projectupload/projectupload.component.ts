import { Component, OnInit,EventEmitter } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { AlertService } from "../../services/alert.service";
import { ToastrService } from 'ngx-toastr';
import {
  NgForm,
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { first } from "rxjs/operators";
import { IProject } from "../../_models/Iproject";
import { Router, ActivatedRoute } from "@angular/router";
import { UploadFile, UploadInput, UploadOutput } from "ng-uikit-pro-standard";
import { IMyOptions, humanizeBytes } from "ng-uikit-pro-standard";

@Component({
  selector: 'app-projectupload',
  templateUrl: './projectupload.component.html',
  styleUrls: ['./projectupload.component.scss']
})
export class ProjectuploadComponent implements OnInit {

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  
  createProjectForm: FormGroup  ; 
  validatingForm: FormGroup; /*for validations*/
 
  loading = false;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.createProjectForm = this.formBuilder.group({
   
      tittle: ['', Validators.required],  
      projectType: ['',Validators.required],
      estimatedBudget: ['', Validators.required],
      descriptionStory: ['', [Validators.required, Validators.minLength(12)]],
      objective: ['', [Validators.required, Validators.minLength(12)]],
      country: ['', Validators.required],
      startDate: ['', Validators.required],
      registerationNumber:['', Validators.required],
      imageUrl: ['', Validators.required]
  });
  }/* ngoninint ends*/

  onCreateProjectSubmit() {

    console.log(this.createProjectForm.value)
    this.submitted = true;
    // stop here if form is invalid
    // if (this.registerUserForm.invalid) {
    //     return;
        
    // }
    this.loading = true;
    if (this.createProjectForm.value.imageUrl== ""){
      this.createProjectForm.value.imageUrl = "n/a"
    }
    this.backendService.createProject(this.createProjectForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('project Created Successfully', true);
                this.router.navigate(['/projects']);
              
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

}
