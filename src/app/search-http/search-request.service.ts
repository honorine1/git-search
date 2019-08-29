import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ environment } from '../../environments/environment';
import { SearchClass } from '../search-class';


@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {

  searchClass:SearchClass;

  constructor(private http:HttpClient){
this.searchClass = new SearchClass("","","")
  } 
  searchRequest(){
    interface ApiResponse{
      login:any;
      public_repos:any;
      avatar_url:any;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.searchClass.login = response.login
        this.searchClass.public_repos = response.public_repos
        this.searchClass.avatar_url = response.avatar_url
        resolve()
      }),
      error=>{
        this.searchClass.login= 'no username'
        this.searchClass.public_repos = 'no repos number'
        this.searchClass.avatar_url= 'profile is not showing up'
        reject(error)
  }
 
    
  })
  return promise;
  }
}
