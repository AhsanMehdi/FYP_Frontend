import { Component, OnInit } from '@angular/core';
//import { <FormGroup>, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-steppers',
  templateUrl: './steppers.component.html',
})
export class SteppersComponent implements OnInit {
  //firstFormGroup: FormGroup;
 // secondFormGroup: FormGroup;

  ngOnInit() {
  //   this.firstFormGroup = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email])
  //   });
  //   this.secondFormGroup = new FormGroup({
  //     password: new FormControl('', Validators.required)
  //   });
   }

  // get email() { return this.firstFormGroup.get('email'); }
  // get password() { return this.secondFormGroup.get('password'); }

  // onSubmit() {
  //   // do something here
   //}

}