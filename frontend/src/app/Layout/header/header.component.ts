import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isAdmin:boolean = false;
  name:string = '';

  constructor(private service:UserService){}

  ngOnInit(): void {
    this.service.role$.subscribe(role=>{
      if(role == 'admin'){
        console.log("service role is admin");
        this.isAdmin = true;
      }else{
        console.log("service role is NOT admin");
        this.isAdmin = false
      }
      this.name = this.service.getFullName();
    })
  }

  //reload will delete service memory so it will logout.
  logout(){
    window.location.reload()
  }

}
