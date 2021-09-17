import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  users: any[] = [];

  constructor(private router: Router, private ics: CommonService) { }

  ngOnInit(): void {
  }
  profile(contract: any, pwd: any) {
    debugger
    contract = contract.value;
    pwd = pwd.value;
    this.ics.getUserData().subscribe(
      (res) => {
        debugger
        const data = JSON.stringify(res);
        this.users = JSON.parse(data);
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].number === contract && this.users[i].pwd === pwd) {
            if (confirm('successfull press yes')) 
            {
              this.router.navigate(["profile2"]);
              return;
            }
          }
        }
      },
      (err) => console.log(err)
    )


  }

}
