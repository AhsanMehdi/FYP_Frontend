import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { INgoProfile  } from '../../_models/Ingoprofile';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ngos',
  templateUrl: './ngos.component.html',
  styleUrls: ['./ngos.component.scss']
})
export class NgosComponent implements OnInit {
 
  ngos: any
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  constructor(private router:Router, private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getNgos() /*get all projects*/
    .pipe(first())
    .subscribe(
      data => {
        this.ngos = data.ngoProfile;
        console.log(this.ngos)

      },
      error => {
        console.log(error);
      });
  }

}
