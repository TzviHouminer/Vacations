import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email:string = '';
  password:string = '';
  isCorrect = '';
  passwordValidError :string = '';
  emailValidError: string = '';
  myUrl = "http://localhost:5000/api/v1/login/checkLogin";
  passType : string = 'password';

  constructor(private http:HttpClient, private router:Router, private service:UserService){  }

  checkLogin(){
    if(this.passwordValidError != '' || this.emailValidError != ''){return}

    const data = {
      "email":this.email,
      "password":this.password
    }

    this.http.post(this.myUrl,data)
      .subscribe({
        next:(result:any)=>{
          const response = result[0];
          this.service.setInfo(response.role,response.userID, response.fullName);
          if(response.role == "admin"){
            this.router.navigate(["admin/holidays"])
          }else{this.router.navigate(["holidays"])}
        },
        error: (error)=>{console.log("error: ",error);
          this.isCorrect = 'False increments<br/>';}
      } as Observer<any>)
  }

  register(){
    this.router.navigate(["register"])
  }

  checkEmailValid(){
    this.emailValidError = '';
    if(!this.email.includes('@')){
      this.emailValidError = "email has to include '@'."}
  }

  checkPasswordValid(){
    this.passwordValidError = '';
    if(this.password.length<4){
      this.passwordValidError = "password has to be at least 4 characters."}
  }

  toggleEye(){
    //change the type of the password to show/hide the characters.
    //affect the ngClass as well (change the eye icon).
    this.passType = this.passType == 'password' ? 'text' : 'password';
  }
}