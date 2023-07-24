import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Holiday } from 'src/app/Model/Holiday';
import { UserService } from 'src/app/Services/user.service';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit{
  holidays :Holiday[] = [];
  userID :number = this.service.getUserID();
  currentPage :number = 1;
  pageSize :number = 10;
  imgURL:string = "http://localhost:5000/photos/"

  constructor(
    private http:HttpClient,
    private service:UserService,
    private element:ElementRef,
    private router:Router,
    private modalService: NgbModal){}

  ngOnInit(): void {
    this.http.get<Holiday[]>("http://localhost:5000/api/v1/holidays/getAllHolidays")
    .subscribe((data)=>{
      this.holidays = this.sortByDate(data);
    });
  }

  sortByDate(holidaysList:Holiday[]):Holiday[]{
    let holidays = holidaysList
    holidays.sort((h1,h2)=>{
      return (new Date(h1.startDate).getTime() - new Date(h2.startDate).getTime())
    });
    return holidays
  }

  scrollToTop(){
    this.element.nativeElement.querySelector('.holidays').scrollTop = 0;
  }

  EditHoliday(id:number){
    this.router.navigate([`/admin/editHolidayById/${id}`]);
  }

  deleteModal(id:any, destination:string){
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.destination = destination;
    modalRef.componentInstance.holidayID = id;
    modalRef.componentInstance.onDelete.subscribe(()=>{
      modalRef.close();
      this.ngOnInit();
    })
  }

}
