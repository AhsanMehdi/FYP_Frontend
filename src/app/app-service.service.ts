import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private _url: string ="localhost:3000/ping";
  constructor(private http: HttpClient) {

   }

   getData(){
     return this.http.get(this._url);

   }
}
