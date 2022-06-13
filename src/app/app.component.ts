import { Component } from '@angular/core';
import { MapicpinserviceService } from './mapicpinservice.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'magicpin';
  mbl: any;
  data :any =[];
  userId: any;
  constructor(private MapicpinserviceService: MapicpinserviceService) { }
  ngOnInit(){
  
    let broswer = this.detectBrowserName()
    console.log(broswer,"bb")
  }
    detectBrowserName() { 
      const agent = window.navigator.userAgent.toLowerCase()
      console.log(agent)
      switch (true) {
        case agent.indexOf('edge') > -1:
          return 'edge';
        case agent.indexOf('opr') > -1 && !!(<any>window).opr:
          return 'opera';
        case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
          return 'chrome';
        case agent.indexOf('trident') > -1:
          return 'ie';
        case agent.indexOf('firefox') > -1:
          return 'firefox';
        case agent.indexOf('safari') > -1:
          return 'safari';
        default:
          return 'other';
      }
    }
  onSubmit(form: NgForm) {
    let payload = { "phoneNumber": form.value.phoneNumber, "authMethod": "SMS" }
    this.mbl = form.value.phoneNumber
    this.MapicpinserviceService.signupaccount(payload).subscribe(res => {
      console.log(res)
this.verifyv = true
this.submit = false

    })
  }
verifyv = false
submit = true
  verify(form: NgForm){
    this.submit = false
    console.log(form.value.auth_otp,"form")
   let payload = {
      "auth_phone": this.mbl,
      "auth_otp": form.value.auth_otp
    }
    console.log(payload)
    this.MapicpinserviceService.verify(payload).subscribe(res => {
      console.log(res)
    })
  }

  apolo(){
    let payload = {"operationName":"Login","variables":{"mobileNumber":"+919912255900","loginType":"PATIENT"},"query":"query Login($mobileNumber: String!, $loginType: LOGIN_TYPE!) {\n  login(mobileNumber: $mobileNumber, loginType: $loginType) {\n    status\n    message\n    loginId\n    __typename\n  }\n}\n"}
    this.MapicpinserviceService.apolo(payload).subscribe(res => {
    this.data =res
    this.userId =this.data.data.login.loginId
    })
  }
  vapolo(){
let payload = {"operationName":"verifyLoginOtp","variables":{"otpVerificationInput":{"id":this.userId,"otp":"832709","loginType":"PATIENT"}},"query":"query verifyLoginOtp($otpVerificationInput: OtpVerificationInput) {\n  verifyLoginOtp(otpVerificationInput: $otpVerificationInput) {\n    status\n    authToken\n    isBlocked\n    reason\n    incorrectAttempts\n    mobileNumber\n    __typename\n  }\n}\n"}
this.MapicpinserviceService.apolo(payload).subscribe(res => {
  console.log(res)
  })
}
  
}
