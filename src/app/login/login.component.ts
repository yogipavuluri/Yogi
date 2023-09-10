import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // userData:any
  userData = {
    mobile: '',
    password:''
  };
 public message: string | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  changeData() {
    
  }
  login() {
    let payload = {
      mobile:this.userData.mobile,
      password:this.userData.password
    }
    this.router.navigate(['/Dashboard']);

    // if(payload.mobile == '9912255900' && payload.password == '9912255900'){
    //   this.router.navigate(['/Dashboard']);
    // }
    // else{
    //   this.message = "Invalid Details"
    // }

  }

}
