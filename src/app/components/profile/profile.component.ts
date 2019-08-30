import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SearchRequestService } from '../../search-http/search-request.service';
import { SearchClass } from 'src/app/search-class';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  searchClass:SearchClass;
  login:any;

  constructor(private searchService:SearchRequestService) { 
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
    this.searchService.searchRequest();
    this.searchClass = this.searchService.searchClass;
    
  }

}
