import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.component.html',
  styleUrls: ['./registration2.component.css']
})
export class Registration2Component implements OnInit {

  users: any[] = [];

  constructor(private router: Router, private ics:CommonService) { }

  ngOnInit(): void {
  }
  
  Submit(fname: any, lname: any, email: any, number: any, address: any, pwd: any) {


    this.users.push({
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      number: number.value,
      address: address.value,
      pwd: pwd.value

    })
    this.ics.saveUserData(this.users).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(["login2"])
      },
      (err)=>console.log(err),
    )
    

  }


}
