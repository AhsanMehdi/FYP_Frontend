import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showTrnsaparent = true
  constructor() {


    if (window.location.href != "http://localhost:4200/"  ) {

      this.showTrnsaparent=false
    }

    console.log( window.location.href);
   }

  ngOnInit(): void {
  }

}
