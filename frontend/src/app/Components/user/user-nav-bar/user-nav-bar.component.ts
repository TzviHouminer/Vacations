import { Component, EventEmitter, Output } from '@angular/core';
import { Filters } from 'src/app/Model/Filters';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent {
  favorite:boolean = false;
  future:boolean = false;
  present:boolean = false;
  
  @Output() sendFilter = new EventEmitter<Filters>;

  changeFavorite(){
    this.favorite = !this.favorite;
    const updated = {'favorite':this.favorite,'future':this.future,'present':this.present};
    this.sendFilter.emit(updated);
  }

  changeFuture(){
    this.future = !this.future;
    const updated = {'favorite':this.favorite,'future':this.future,'present':this.present};
    this.sendFilter.emit(updated);
  }
  
  changePresent(){
    this.present = !this.present;
    const updated = {'favorite':this.favorite,'future':this.future,'present':this.present};
    this.sendFilter.emit(updated);
  }

}
