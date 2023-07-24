import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName :string = '';
  lastName :string = '';
  email :string = '';
  password :string = '';
  emailAvailableError :string = '';
  validErrors :string = '';

  constructor(private http:HttpClient, private router:Router, private service:UserService){}

  submitForm(){
    if(!this.checkValid()){return}
    const newUser = {
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password,
    }

    this.http.post<number>("http://localhost:5000/api/v1/login/register",newUser)
    .subscribe({
      next: (id:number)=>{
        this.service.setInfo('user',id,(newUser.firstName+' '+newUser.lastName));
        this.router.navigate(["holidays"]);
      },
      error:(error)=>{
        if(error.status === 409){
          this.emailAvailableError = "Email is already taken."
        }
      }
    })
  }

  checkValid():boolean{
    this.validErrors = '';
    if(!this.email.includes('@')){
      this.validErrors += "email has to include '@'.<br/>"}
    if(this.password.length<4){
      this.validErrors += "password has to be at least 4 characters.<br/>"}
    return this.validErrors == '';
  }

  goToLogin(){
    this.router.navigate([""]);
  }
}
