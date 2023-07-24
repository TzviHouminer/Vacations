import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  constructor(private router:Router, private service:UserService){}

  ngOnInit(){
    //checks if the user is logged. (if the page reload manually and the app resets the Service.)
      if(this.service.getUserID() == 0){
        this.router.navigate([""]);
      }
  }
}
