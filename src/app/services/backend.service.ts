import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ngo, Donor } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }


  registerNgo(ngo: Ngo) {
    return this.httpClient.post(this.REST_API_SERVER+"/ngo-account-controllers", ngo);
  }

  registerDonor(donor: Donor) {
    return this.httpClient.post(this.REST_API_SERVER+"/donor-account-controllers", donor);
  }

}