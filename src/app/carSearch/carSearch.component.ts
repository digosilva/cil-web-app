import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'car-search',
    templateUrl: './carSearch.component.html',
    styleUrls: ['./carSearch.component.css']
  })
  export class carSearch implements OnInit {
    
  
    constructor(public router: Router) { }
  
    ngOnInit() {
    }
  
    routeToFramework(event) {
      this.router.navigate(['/searchResults'])
   }
  }