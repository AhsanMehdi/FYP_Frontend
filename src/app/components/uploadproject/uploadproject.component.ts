import { Component, OnInit, EventEmitter } from "@angular/core";
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
  selector: "app-uploadproject",
  templateUrl: "./uploadproject.component.html",
  styleUrls: ["./uploadproject.component.scss"],
})
export class UploadProjectComponent implements OnInit {
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  Title = "";
  Loucation = "";
  Type = "";
  Objective = "";
  EstimatedBudget = "";
  ExpectedEndDate = "";
  RegisterationNumber = "";
  Visibility = "";
  ImageURL = "";
  Description = "";

  ShowTab1 = true;
  ShowTab2 = false;
  ShowTab3 = false;

  Tab1state: string = "completed";
  Tab2state: string = "";
  Tab3state: string = "";

  validatingForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.Title = this.route.snapshot.queryParams.title;
    this.Loucation = this.route.snapshot.queryParams.loucation;
    this.Type = this.route.snapshot.queryParams.type;

    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;

    this.validatingForm = fb.group({
      objective: new FormControl({ value: "", disabled: false }, [
        Validators.required,
        Validators.minLength(4),
      ]),

      title: new FormControl({ value: this.Title, disabled: false }, [
        Validators.required,
        Validators.minLength(4),
      ]),
      loucation: new FormControl({ value: this.Loucation, disabled: false }, [
        Validators.required,
        Validators.minLength(4),
      ]),
      type: new FormControl({ value: this.Type, disabled: false }, [
        Validators.required,
        Validators.minLength(4),
      ]),

      estimatedBudget: new FormControl({ value: "", disabled: false }, [
        Validators.required,
        Validators.minLength(4),
      ]),

      expectedEndDate: new FormControl({ value: "", disabled: false }, [
        Validators.required,
        Validators.minLength(4),
      ]),

      registerationNumber: new FormControl({ value: "", disabled: false }, [
        Validators.required,
        Validators.minLength(4),
      ]),

      visibility: new FormControl({ value: "", disabled: false }, [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl({ value: "", disabled: false }, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });

    console.log(this.Title, this.Loucation, this.Type);
  }

  public myDatePickerOptions: IMyOptions = {
    dayLabels: {
      su: "Sun",
      mo: "Mon",
      tu: "Tue",
      we: "Wed",
      th: "Thu",
      fr: "Fri",
      sa: "Sat",
    },
  };

  ngOnInit(): void {}

  postproject(): void {
  }

  onSubmit(): void {
    this.Objective = this.validatingForm.get("objective").value;
    this.EstimatedBudget = this.validatingForm.get("estimatedBudget").value;
    this.ExpectedEndDate = this.validatingForm.get("expectedEndDate").value;
    this.RegisterationNumber = this.validatingForm.get(
      "registerationNumber"
    ).value;
    this.Visibility = this.validatingForm.get("visibility").value;
    this.Description = this.validatingForm.get("description").value;


    console.log("Objective", this.Objective);
    console.log("EstimatedBudget", this.EstimatedBudget);
    console.log("ExpectedEndDate", this.ExpectedEndDate);
    console.log("RegisterationNumber", this.RegisterationNumber);
    console.log("Visibility", this.Visibility);
    console.log("ImageURL", this.ImageURL);
    console.log("Description", this.Description);

    let curreentDate = new Date()
   
    if (this.Visibility == "true") {

      this.Visibility = "Public"
    }else{
      this.Visibility = "Private"
    }

    let project = {
      tittle: this.Title,
      projectType: this.Type,
      estimatedBudget:  parseFloat( this.EstimatedBudget),
      totalDonation: 0,
      collectedDonation: 0,
      descriptionStory: this.Description,
      objective: this.Objective,
      currentExpenses: 0,
      country: this.Loucation,
      expectedEndDate: this.ExpectedEndDate,
      startDate:  curreentDate.toString(),
      visibility: this.Visibility,
      RegisterationNumber: this.RegisterationNumber,
      totalDonors: 0,
      visibleDonors: "0",
      imageUrl: this.ImageURL
    
    }

    this.backendService.createProject( project)
    .pipe(first())
    .subscribe(
        data => {

          this.toastr.success('Hello world!', 'Project Created Successfully');
          this.router.navigate(['/']);
           console.log(data)
        },
        error => {
          this.toastr.error('Hello world!', error);
            this.alertService.error(error);
    
        });
  }

  onNext(section: string): void {
    console.log();

    if (section == "2") {
      this.ShowTab1 = false;
      this.ShowTab2 = true;
      this.Tab2state = "completed";
    } else if (section == "3") {
      this.ShowTab1 = false;
      this.ShowTab2 = false;
      this.ShowTab3 = true;
      this.Tab3state = "completed";
    }
  }

  showFiles() {
    let files = "";
    for (let i = 0; i < this.files.length; i++) {
      files += this.files[i].name;
      if (!(this.files.length - 1 === i)) {
        files += ",";
      }
    }
    return files;
  }

  startUpload(): void {
   console.log("startUploading file")
    this.backendService.uploadImage( this.selectedFile)
    .pipe(first())
    .subscribe(
        data => {
          console.log("startUploading completed", data)
          if (data[0]){
            let id = data[0].id
            this.ImageURL = "http://localhost:3000/api/photos/images/"+id
          }
           console.log(data)
        },
        error => {
          console.log(error)
            this.alertService.error(error);
    
        });
    
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: "cancel", id: id });
  }

  selectedFile : any

  onFileChanged(event) {
    const file = event.target.files[0]
    this.selectedFile = file
    console.log("onfilechange",file)
  }

  onUploadOutput(output: UploadOutput | any): void {

    console.log(output)
    if (output.type === "allAddedToQueue") {
    } else if (output.type === "addedToQueue") {
      this.files.push(output.file); // add file to array when added
      this.startUpload()
    } else if (output.type === "uploading") {
      // update current data in files array for uploading file
      const index = this.files.findIndex((file) => file.id === output.file.id);
      this.files[index] = output.file;

      console.log("file",output.file)
    } else if (output.type === "removed") {
      // remove file from array when removed
      this.files = this.files.filter(
        (file: UploadFile) => file !== output.file
      );
    } else if (output.type === "dragOver") {
      this.dragOver = true;
    } else if (output.type === "dragOut") {
    } else if (output.type === "drop") {
      this.dragOver = false;
    }
    this.showFiles();
  }
}
