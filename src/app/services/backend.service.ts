import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { SignUp, SignIn  } from '../_models';
import { IProject  } from '../_models';
import { ICampaign  } from '../_models';
import { map,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private REST_API_SERVER = "http://localhost:3000";
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }


  signUp(signUp:  SignUp) {

    
    signUp.userType="ngo"

    console.log(    JSON.stringify(signUp)
    )
    return this.httpClient.post(this.REST_API_SERVER+"/api/auth/signup",  JSON.stringify(signUp), this.options);
  }
  signIn(signIn:  SignIn) {

    console.log(    JSON.stringify(signIn)
    )
    return this.httpClient.post(this.REST_API_SERVER+"/api/auth/signin",  JSON.stringify(signIn), this.options);
  }

  getProjects(): Observable<any> {
    return  this.httpClient.get(this.REST_API_SERVER+"/api/project",   this.options)
  }

  getCampaigns(): Observable<any> {
    return  this.httpClient.get(this.REST_API_SERVER+"/api/campaign",   this.options)
  }

  getProjectById(id:string): Observable<any> {
    return  this.httpClient.get(this.REST_API_SERVER+"/api/project/"+id,   this.options)
  }

}