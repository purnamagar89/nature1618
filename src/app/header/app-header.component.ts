import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 
  }

  openNav() {
    var x = document.getElementById("topnavbar");
    if (x.className === "header-navbar") {
      x.className += " responsive";
    } else {
      x.className = "header-navbar";
    }
  }

}
