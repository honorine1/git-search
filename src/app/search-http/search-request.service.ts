import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ environment } from '../../environments/environment';
// import { SearchClass } from '../search-class';
import { User } from '../user';
import { Repo } from '../repo';


@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {

  // searchClass:SearchClass;
  users:User;
  repos:Repo;
  // reposs:any;
  // login:any;

  constructor(private http:HttpClient){
// this.searchClass = new SearchClass("","","","","","","")
this.users = new User("","","","","",new Date(),"","")
this.repos = new Repo("","","",new Date())

  } 
  searchRequest(profilo1){
    interface ApiResponse{
      login:any;
      public_repos:any;
      avatar_url:any;
      name:string;
      html_url:any;
      description: any  
      following:any;
      followers:any;  
      created_at:Date  
     

    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+ profilo1+'?access_token='+environment.apiUrl).toPromise().then(getResponse=>{
        this.users.login = getResponse.login
        this.users.public_repos = getResponse.public_repos
        this.users.avatar_url = getResponse.avatar_url
        this.users.name = getResponse.name
        this.users.html_url = getResponse.html_url
        this.users.following = getResponse.following 
         this.users.followers = getResponse.followers
         this.users.created_at = getResponse.created_at
        resolve()
      }),
      error=>{
        this.users.login= 'no username'
        this.users.public_repos = 'no repos number'
        this.users.avatar_url= 'profile is not showing up'
        this.users.name= 'you did not have a github name'
        this.users.html_url= 'dont you have a github link?'
        this.users.following= 'how many are following you?'
        this.users.followers= 'how many you are following?'
        reject(error)
  }
 
    
  })
  return promise;
  }
//   searchRequests(profilo1){
//     interface ApiResponse{
//       name:string;
//       html_url:any;
//       description: any  
//       created_at:any; 
      

//     }

//   let myPromise = new Promise((resolve,reject)=>{
//     this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(getResponse=>{
//       this.repos.name = getResponse.name
//       this.repos.html_url = getResponse.html_url
//       this.repos.description = getResponse.description
//       this.repos.created_at = getResponse.created_at
//       // this.reposs = getResponse;
      
//       resolve()
//     }),
//     error=>{
//       // this.reposs='error'
//       this.repos.html_url = 'no repos number'
//       this.repos.description= 'profile is not showing up'
//       this.repos.created_at= 'hh'
      
//       reject(error)
// }

  
// })
// return myPromise;
// }
  // updateSearch(login:any){
  //   this.login=login
  // }
}
