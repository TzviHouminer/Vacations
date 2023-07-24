import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Holiday } from 'src/app/Model/Holiday';
import { UserService } from 'src/app/Services/user.service';
import { Filters } from 'src/app/Model/Filters';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit{
  holidays :Holiday[] = [];
  filters :Filters = {'favorite':false,'future':false,'present':false};
  filteredHolidays :Holiday[] = [];
  followersCountMap :{ [holidayID: number]: number } = {};
  userFollowsMap :{ [holidayID: number]: boolean } = {};
  userID :number = this.service.getUserID();
  imgURL:string = "http://localhost:5000/photos/"

  currentPage :number = 1;
  pageSize :number = 10;



  constructor(private http:HttpClient, private service:UserService, private element:ElementRef){}

  ngOnInit(): void {
      this.http.get<Holiday[]>("http://localhost:5000/api/v1/holidays/getAllHolidays")
      .subscribe((data)=>{
        this.holidays = this.sortByDate(data);
        this.filteredHolidays = this.holidays;
        this.checkFollowers();
        this.checkUserFollows();
      });
  }

  checkFollowers(){
    this.holidays.map(item=>{this.followersCountMap[item.holidayID] = 0});
    this.http.get<any[]>("http://localhost:5000/api/v1/holidays/getNumFollowers")
        .subscribe(data=>{data.map(item=>{
          this.followersCountMap[item.holidayID] = item.followers;
          })
        })
  }

  checkUserFollows(){
    this.holidays.map(item=>this.userFollowsMap[item.holidayID] = false)
    this.http.get<{'holidayID':number}[]>(`http://localhost:5000/api/v1/holidays/getHolidaysFollowed/${this.userID}`)
    .subscribe(data=>{data.map(item=>{
      this.userFollowsMap[item.holidayID] = true;
    })})  
  }

  sortByDate(holidaysList:Holiday[]):Holiday[]{
    let holidays = holidaysList
    holidays.sort((h1,h2)=>{
      return (new Date(h1.startDate).getTime() - new Date(h2.startDate).getTime())
    });
    return holidays
  }

  favorite(holidayID:number){
    if(this.userFollowsMap[holidayID]){
      this.http.delete(`http://localhost:5000/api/v1/holidays/removeFollow/${this.userID}/${holidayID}`)
      .subscribe(()=>{
      this.userFollowsMap[holidayID] = !this.userFollowsMap[holidayID];
      this.followersCountMap[holidayID]--;
    })
    }else{
      this.http.post(`http://localhost:5000/api/v1/holidays/addFollow`,{'userID':this.userID,'holidayID':holidayID})
      .subscribe(()=>{
        this.userFollowsMap[holidayID] = !this.userFollowsMap[holidayID];
        this.followersCountMap[holidayID]++;
      })
    }
  }

  favoriteBool(item:Holiday):boolean{
    return this.filters.favorite ? this.userFollowsMap[item.holidayID]:true
  }

  futureBool(item:Holiday):boolean{
    return this.filters.future ? (new Date() < new Date(item.startDate)) : true
  }

  presentBool(item:Holiday):boolean{
    const today = new Date();
    const start = new Date(item.startDate);
    const end = new Date(item.endDate);
    return this.filters.present ? (today >= start && today <= end) : true 
    // return false if the filter is on and the holiday isn't active currently; true otherwise.
  }

  setFilters(updated:Filters){
    this.filters = updated;
    this.filteredHolidays = this.holidays.filter(item=>{
      return this.favoriteBool(item) && this.futureBool(item) && this.presentBool(item)
      // leaves only the holidays matching the activated filters.
    })
    this.currentPage = 1;
  }

  scrollToTop(){
    // for page moving.
    this.element.nativeElement.querySelector('.holidays').scrollTop = 0;
  }

}