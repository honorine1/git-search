import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchClass } from 'src/app/search-class';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
 
//    newSearchClass = new SearchClass("","","","","","","");
// @Output() addSearch = new EventEmitter<SearchClass>();

//   submitSearch(){
// this.addSearch.emit(this.newSearchClass);
//   }

  constructor() { }

  ngOnInit() {
  }

}
