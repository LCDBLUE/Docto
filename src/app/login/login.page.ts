import { Component, OnInit } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  otp;

  constructor(public fba:FirebaseAuthentication) { }

  ngOnInit() {
  }

  // sentOtp(){
  //   this.fba.verifyPhoneNumber("+918318578233", 30000).then(function(verificationId) {
  //     this.otp=verificationId;
  //     console.log(this.otp);
      
  // });
  // }
  

}
