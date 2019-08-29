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
  constructor(private searchService:SearchRequestService) { }

  ngOnInit() {
    this.searchService.searchRequest();
    this.searchClass = this.searchService.searchClass;
    
  }

}
