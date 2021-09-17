
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  registration(){
    if(confirm("are you navigate to routing  login page ")){
      this.route.navigate(['login'])
    }
  }
}
