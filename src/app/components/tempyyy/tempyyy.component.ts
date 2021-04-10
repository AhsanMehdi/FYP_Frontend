import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempyyy',
  templateUrl: './tempyyy.component.html',
  styleUrls: ['./tempyyy.component.scss']
})
export class TempyyyComponent implements OnInit {
  model: any = {};
  public maxLength = 5;
  constructor() { }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
  ngOnInit(): void {
  }

}
