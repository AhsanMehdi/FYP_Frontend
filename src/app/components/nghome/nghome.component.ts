import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ChatAdapter } from 'ng-chat';
import { DemoAdapter } from './my-adapter';
import { BackendService } from '../../services/backend.service';
@Component({
  selector: 'app-nghome',
  templateUrl: './nghome.component.html',
  styleUrls: ['./nghome.component.scss']
})
@Injectable()
export class NghomeComponent implements OnInit {

  title = 'ng-uikit-pro-standard';
  userId = 1;
  ngos = []
  showChatbox = false;

  public adapter: ChatAdapter;

  constructor(private http: HttpClient,private backendService: BackendService,private router:Router) { }
  


  ngOnInit(): void {
   
    this.showChatbox = false;
    this.backendService.getNgos() /*get all ngos*/
    .subscribe(
      data => {
     
        this.adapter =   new DemoAdapter(data.ngoProfile);
      

      },
      error => {
        console.log(error);
      });
  }

  openChatBox(){

    this.showChatbox = true;
  }
  logout() {
    localStorage.removeItem('userToken');
    console.log (" i am in logout")
    this.router.navigate(['/signinpage']);
    
    
  }
}
