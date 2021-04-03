import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-donorhome',
  templateUrl: './donorhome.component.html',
  styleUrls: ['./donorhome.component.scss']
})
@Injectable()
export class DonorhomeComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router) { }


  ngOnInit(): void {
   
  }
  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
    
  }

}
