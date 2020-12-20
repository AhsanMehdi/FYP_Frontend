import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import { AlertService } from "../../services/alert.service";
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

@Component({
  selector: "app-detailinformation",
  templateUrl: "./detailinformation.component.html",
  styleUrls: ["./detailinformation.component.scss"],
})
export class DetailInformationComponent implements OnInit {
  validatingForm: FormGroup;

  Title = "";
  Loucation = "";
  Type = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
    private alertService: AlertService
  ) {
    this.Title = this.route.snapshot.queryParams.title;
    this.Loucation = this.route.snapshot.queryParams.loucation;
  }
  onSubmit(projectType: string) {
    this.Type = projectType;
    this.router.navigate(["uploadproject"], {
      queryParams: { title: this.Title, loucation: this.Loucation, type: this.Type,  },
    });
    console.log(projectType);
  }


  ngOnInit(): void {}
}
