import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../Models/User'

import { FirebaseService } from '../../Services/firebase.service'
import { AccountService } from '../../Services/account.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string = "" ;
  public password:string = "";
  constructor(private firebaseService : FirebaseService, private accountService : AccountService, private router: Router ) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log("click login");

    const user : {"pass":string,"email":string}= {
      email : this.email,
      pass : this.password,
    }
    this.accountService.getTokenadmin(user).subscribe(
      (data: any) => {
        console.log("true");
          console.log(data);

          const obj = JSON.parse(data);
          sessionStorage.setItem('token', obj.token);
          this.router.navigate(['home']);
      }
    );
  }

  public login(){
    // console.log("click login");

    const user : {"pass":string,"email":string}= {
      email : this.email,
      pass : this.password,
    }
    console.log(user);
    this.accountService.getTokenadmin(user).subscribe(
      (data: any) => {
        const obj = JSON.parse(data);
          if(obj[0].id == 0){
            console.log('ll');
          }else{
            sessionStorage.setItem('token', obj[0].id);
            this.router.navigate(['home']);
          }
      }
    );
    // this.router.navigate(['home']);
  }

  loginWithGoogle(){



    this.firebaseService.loginWithGoogle();

  }
}
