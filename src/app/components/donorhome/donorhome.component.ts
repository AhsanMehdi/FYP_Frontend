import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router'
@Component({
  selector: 'app-donorhome',
  templateUrl: './donorhome.component.html',
  styleUrls: ['./donorhome.component.scss']
})
export class DonorhomeComponent implements OnInit {
  constructor(  private router: Router,) { }


  ngOnInit(): void {
   this.getToken();
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/home']);
  }
  getToken(){
    if(localStorage.getItem("token") === null || localStorage.getItem("token") === undefined){
      this.router.navigate(['/home']);
    }
  }
}
