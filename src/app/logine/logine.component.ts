import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logine',
  templateUrl: './logine.component.html',
  styleUrls: ['./logine.component.css']
})
export class LogineComponent implements OnInit {

  constructor(private roter:Router) {
    debugger
   }

  ngOnInit(): void {
    debugger
  }
  dashbord(){
    debugger
    if(confirm("Are you go to dashbord?"))
    {
      this.roter.navigate(["Dashbord"])
    }
    else{
      this.roter.navigate(["registration"])
    }
  }

}
