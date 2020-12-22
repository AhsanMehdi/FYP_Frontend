import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-uikit-pro-standard';
  
   showHeader = true
  constructor() {

    
    if ((window.location.href == "http://localhost:4200/donorhome") || (window.location.href == "http://localhost:4200/ngoprofile") ) {

      this.showHeader=false
    }


  }

}
