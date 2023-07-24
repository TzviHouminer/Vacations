import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
  @Input() destination :string = '';
  @Input() holidayID :any = '';
  @Output() onDelete :EventEmitter<any> = new EventEmitter();


  constructor(private activeModal: NgbActiveModal,private http:HttpClient, private router:Router){}

  close(){
    this.activeModal.dismiss('Cross click')
  }

  delete(){
    this.http.delete(`http://localhost:5000/api/v1/admin/holidays/deleteHolidayById/${this.holidayID}`)
    .subscribe(()=>{this.onDelete.emit()})
  }
}
