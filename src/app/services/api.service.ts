import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointKeys, endpoints, Lambda } from './endpoints';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  request<T = any>(url : EndpointKeys,method : string, payload? : object, urlParams? : any):Observable<T>{
    let finalUrl : string;
    if(!urlParams){
      finalUrl = <string>endpoints[url];
    }else{
      finalUrl = (<Lambda>endpoints[url])(urlParams);
    }
    // Execute HTTP request based on method (GET, POST)
    return !payload
      ? this.http.request<T>(method, finalUrl)
      : this.http.request<T>(method, finalUrl, {body:payload});
  }
}
