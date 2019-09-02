import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchRequestService } from '../../search-http/search-request.service';
import { User } from 'src/app/user';
import { Repo } from 'src/app/repo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  // searchClass:SearchClass;
  users:User;
  repos:Repo[];
  // login:any;

  constructor(private searchService:SearchRequestService,private activatedRoute:ActivatedRoute) { 
    // findProfile() {
    //   this.searchClass.updateProfile(this.login);
    //   this.searchClass.getProfileInfo().subscribe(profile => {
    //     console.log(profile);
    //     this.profile = profile;
    //   });
  }
  // findProfile(){
  //    this.searchService.updateSearch(this.login)
  // }

 
  ngOnInit() {
    //for user
    // this.searchService.searchRequests();
    this.users = this.searchService.users;
    //for repos
// this.searchService.searchRequests();
    this.repos = this.searchService.repos;
    // for repos
    let profilo=this.activatedRoute.snapshot.paramMap.get('profilo')
    this.searchService.searchRequest(profilo)
    this.repos = this.searchService.repos
  }

}
