import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import { AlertService } from "../../services/alert.service";
import { NgForm, FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { IProject } from "../../_models/Iproject";
import { Router } from "@angular/router";
import { title } from "process";

@Component({
  selector: "app-initialinformation",
  templateUrl: "./initialinformation.component.html",
  styleUrls: ["./initialinformation.component.scss"],
})
export class InitialInformationComponent implements OnInit {
  validatingForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.validatingForm = fb.group({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      loucation: new FormControl(null, [Validators.required]),
    });
  }
  Catagory = "";
  Title = "";
  Loucation = "";
 

  Cheackformvalid(): boolean {
    console.log(this.validatingForm.get("title").valid);
    return (
      this.validatingForm.get("title").valid &&
      this.validatingForm.get("loucation").valid
    );
  }

  onSubmit() {
    if (this.Cheackformvalid()) {
     
    } 

    this.Title =  this.validatingForm.get("title").value
   this.Loucation =  this.validatingForm.get("loucation").value

    this.router.navigate(['detailinformation'],{ queryParams: { title: this.Title, loucation: this.Loucation} });
  }

  ngOnInit(): void {}
}
