import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ngoprofile',
  templateUrl: './ngoprofile.component.html',
  styleUrls: ['./ngoprofile.component.scss']
})
export class NgoProfileComponent {
  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormDarkEmail: new FormControl('', Validators.email),
      modalFormDarkPassword: new FormControl('', Validators.required)
    });
  }

  get modalFormDarkEmail() {
    return this.validatingForm.get('modalFormDarkEmail');
  }

  get modalFormDarkPassword() {
    return this.validatingForm.get('modalFormDarkPassword');
  }
}