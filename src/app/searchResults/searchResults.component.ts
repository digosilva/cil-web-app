import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'search-result',
    templateUrl: './searchResults.component.html',
    styleUrls: ['./searchResults.component.css']
  })
  export class searchResult implements OnInit {
    
    test = 'corsa';
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }