import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchClass } from 'src/app/search-class';
import {Router } from '@angular/router';
import { SearchRequestService } from '../../search-http/search-request.service';
import { User } from 'src/app/user';
import { Repo } from 'src/app/repo';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  text:string;
  repos:Repo

//    newSearchClass = new SearchClass("","","","","","","");
// @Output() addSearch = new EventEmitter<SearchClass>();

//   submitSearch(){
// this.addSearch.emit(this.newSearchClass);
//   }

  constructor(private router:Router,private searchService:SearchRequestService) { 
   
  }
  submitForm(){
    this.router.navigate(['repos',this.text])
    this.searchService.searchRequest(this.text)
    this.repos=this.searchService.repos

  }

  ngOnInit() {
    
  }

}
