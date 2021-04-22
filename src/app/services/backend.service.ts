import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { SignUp, SignIn , ImageUploadData } from '../_models';
import { IProject  } from '../_models';
import { ICampaign  } from '../_models';
import { INgoProfile  } from '../_models';
import { map,catchError } from 'rxjs/operators';
import { IDonorProfile  } from '../_models';
import { IReviewProject  } from '../_models';

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

    
    console.log ("I am going to database")
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
  getNgos(): Observable<any> {
    return  this.httpClient.get(this.REST_API_SERVER+"/api/profile/ngo",   this.options)
  }

  getProjectById(id:string): Observable<any> {
    return  this.httpClient.get(this.REST_API_SERVER+"/api/project/"+id,   this.options)
  }

  getCampaignById(id:string): Observable<any> {
    console.log ("i m in database")
    
    return  this.httpClient.get(this.REST_API_SERVER+"/api/campaign/"+id,   this.options)
  }
  /* get a campaign by domain*/
  getCampaignByDomain(subject:string): Observable<any> {
    console.log ("i m in database")
    
    return  this.httpClient.get(this.REST_API_SERVER+"/api/campaign/subject/"+subject,   this.options)
  }
    /* get a project by domain*/
    getProjectByDomain(subject:string): Observable<any> {
      console.log ("i m in database given domian is" +subject)
      
      return  this.httpClient.get(this.REST_API_SERVER+"/api/project/projectType/"+subject,   this.options)
    }



    /* get a campaign by country*/
  getCampaignByCountry(state:string): Observable<any> {
    console.log ("i m in database")
    
    return  this.httpClient.get(this.REST_API_SERVER+"/api/campaign/country/"+state,   this.options)
  }
      /* get a campaign by status*/
  getCampaignByStatus(statuss:string): Observable<any> {
    console.log ("i m in database")
    
    return  this.httpClient.get(this.REST_API_SERVER+"/api/campaign/status/"+statuss,   this.options)
  }
        /* get a campaign by Name*/
  getCampaignByName(name:string): Observable<any> {
    console.log ("i m in database")
    
    return  this.httpClient.get(this.REST_API_SERVER+"/api/campaign/nickName/"+name,   this.options)
  }
  getNgoById(id:string): Observable<any> {
    console.log(id)
    return  this.httpClient.get(this.REST_API_SERVER+"/api/profile/ngo/"+id,   this.options)
    console.log(this.REST_API_SERVER+"/api/ngo/"+id)
  }
  /*api will return the profile data of a specific user*/
  getNgoByUserId(id:string): Observable<any> {
    console.log(id)
    return  this.httpClient.get(this.REST_API_SERVER+"/api/profile/ngo/userId/"+id,   this.options)
    console.log(this.REST_API_SERVER+"/api/ngo/"+id)
  }
/* api which return all the projects of a specific owner*/
getProjectsSpecificUser(id:string): Observable<any> {
  console.log(id)
  return  this.httpClient.get(this.REST_API_SERVER+"/api/project/userId/"+id,   this.options)
}
getCampaignsSpecificUser(id:string): Observable<any> {
  console.log(id)
  return  this.httpClient.get(this.REST_API_SERVER+"/api/campaign/userId/"+id,   this.options)
}
/* api which return user/owner id of a specific user*/
getProjectOwnerId(id:string): Observable<any> {
  console.log(id)
  return  this.httpClient.get(this.REST_API_SERVER+"/api/project/id/"+id,   this.options)
}
/* api of comment on a project */
getCommentsOnSpecificProject(id:string): Observable<any> {
  console.log("calling review api "+ id)
  return  this.httpClient.get(this.REST_API_SERVER+"/api/feedback/"+id,   this.options)
}

commentProject(reviewProject:  IReviewProject, id:string) {
  console.log(    JSON.stringify(reviewProject))


  let token = localStorage.getItem('token')

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization:"Token "+token
    })
  };
  /* api to get all comments on a specific projects*/
 

  console.log("token",token)
  console.log("authoptions",httpOptions)

  return this.httpClient.post(this.REST_API_SERVER+"/api/feedback/"+id,  JSON.stringify(reviewProject), httpOptions);
}
/* api to create project */
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
  /* a function to edit donor profile by calling api of post donor profile*/
  donorProfile(donorProfile:  IDonorProfile) {

    
    console.log ("I am going to database")
    console.log(    JSON.stringify(donorProfile)
    )
    let token = localStorage.getItem('token')

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:"Token "+token
      })
    };
   

    console.log("token",token)
    console.log("authoptions",httpOptions)
    return this.httpClient.post(this.REST_API_SERVER+"/api/profile/donor",  JSON.stringify(donorProfile), httpOptions);
  }
  /* function to edit profile of an ngo */
  ngoProfileUpdate(ngoProfile:  INgoProfile) {

    
    console.log ("I am going to database")
    console.log(    JSON.stringify(ngoProfile)
    )
    let token = localStorage.getItem('token')

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:"Token "+token
      })
    };
   

    console.log("token",token)
    console.log("authoptions",httpOptions)
    return this.httpClient.put(this.REST_API_SERVER+"/api/profile/ngo",  JSON.stringify(ngoProfile), httpOptions);
  }
    /* function to edit profile of an ngo */
    ngoProfile(ngoProfile:  INgoProfile) {

    
      console.log ("I am going to database")
      console.log(    JSON.stringify(ngoProfile)
      )
      let token = localStorage.getItem('token')
  
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization:"Token "+token
        })
      };
     
  
      console.log("token",token)
      console.log("authoptions",httpOptions)
      return this.httpClient.post(this.REST_API_SERVER+"/api/profile/ngo",  JSON.stringify(ngoProfile), httpOptions);
    }
  /* a function to upload the campaign */
  createCampaign(campaign:  ICampaign) {
    console.log(    JSON.stringify(campaign))
   console.log ("i am going to db with value ")
   console.log (campaign.country)
   
    let token = localStorage.getItem('token') /* user cannot upload a campaign until they signed in means enter to system */

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:"Token "+token
      })
    };
    console.log("token",token)
    console.log("authoptions",httpOptions)

    return this.httpClient.post(this.REST_API_SERVER+"/api/campaign",  JSON.stringify(campaign), httpOptions);
  }
}