import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { IProject  } from '../../_models/Iproject';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ngos',
  templateUrl: './ngos.component.html',
  styleUrls: ['./ngos.component.scss']
})
export class NgosComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  
  }

}
