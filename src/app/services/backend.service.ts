import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { SignUp, SignIn , ImageUploadData } from '../_models';
import { IProject  } from '../_models';
import { ICampaign  } from '../_models';
import { map,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private REST_API_SERVER = "http://localhost:3000";
  private REST_API_IMGUAR_SERVER = "https://api.imgur.com";
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
  signIn(signIn:  SignIn): Observable<any> {

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

  getCampaignById(id:string): Observable<any> {
    return  this.httpClient.get(this.REST_API_SERVER+"/api/campaign/"+id,   this.options)
  }
  getNgoById(id:string): Observable<any> {
    return  this.httpClient.get(this.REST_API_SERVER+"/api/ngo/"+id,   this.options)
  }

  createProject(project:  IProject) {
    console.log(    JSON.stringify(project))

  
    let token = localStorage.getItem('token')

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:"Token "+token
      })
    };
   

    console.log("token",token)
    console.log("authoptions",httpOptions)

    return this.httpClient.post(this.REST_API_SERVER+"/api/project",  JSON.stringify(project), httpOptions);
  }

  uploadImage(file:any): Observable<any> {

    const formData = new FormData();  
    formData.append("photos", file, file.name); 
    let options = this.options
    options.headers.set("Content-Type","multipart/form-data")

    return this.httpClient.post(this.REST_API_SERVER+"/api/photos/upload",formData );
  }


}