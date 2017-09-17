import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
   
   signinflag : boolean = false;
  constructor() {
   
   }

  ngOnInit() {
  }
  //function for welcome page sign in button click
   opensignin() {
    this. signinflag = true;
    console.log("open sign in");
   }
}
