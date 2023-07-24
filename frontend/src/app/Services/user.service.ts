import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userID:number = 0; //default, there could not be an existing userID == 0.
  private roleSubject:BehaviorSubject<string> = new BehaviorSubject<string>('user'); //could use regular property but the Behavior subject method leaves an option for expansion for listing to real-time changes.
  role$ = this.roleSubject.asObservable();
  private fullName:string = '';

  constructor() { }

  setInfo(role:any, userID: number, fullName:string){
    this.userID = userID;
    this.fullName = fullName;
    this.roleSubject.next(role);
  }

  getUserID(){
    return this.userID;
  }

  getFullName(){
    return this.fullName
  }
  
}
