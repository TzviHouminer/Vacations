import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {
  destination: string = '';
  description: string = '';
  startDate: any = null;
  endDate: any = null;
  price: any = null;
  img: string = '';
  imgFile : FormData = new FormData();

  today :string = new Date().toISOString().split('T')[0];
  errorMsg:string = '';
  
  constructor(private http:HttpClient, private router:Router){}

  submitForm(){
    //check valid form.
    this.errorMsg = '';
    this.checkDate();
    this.checkPriceValid();
    this.checkImg();
    if(this.errorMsg != ''){return}

    const newHoliday =  {
      destination:this.destination,
      description:this.description,
      startDate:new Date(this.startDate),
      endDate:new Date(this.endDate),
      price:this.price,
      img:this.img,
    }
    this.http.post("http://localhost:5000/api/v1/admin/holidays/uploadPhoto",this.imgFile)
      .subscribe(()=>{
        this.http.post("http://localhost:5000/api/v1/admin/holidays/addNewHoliday",newHoliday)
        .subscribe(()=> this.router.navigate(["admin/holidays"]))
      })
    }

  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file:File = fileList[0];
      
      const formData: FormData = new FormData();
      formData.append('file', file);
      this.imgFile = formData;
      this.img = file.name;
      this.errorMsg = '';
    }
  }

  cancel(){
    this.router.navigate(["admin/holidays"]);
}

  checkImg(){
    // check if a file has been uploaded
    if(this.img == ''){
      this.errorMsg += "IMAGE file is missing.<br/>"}
  }

  checkPriceValid(){
    if (this.price < 0 || this.price > 10000){
      this.errorMsg += "PRICE has to be between 0 - 10,000 ₪.<br/>"}
  }

  checkDate(){
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    const today = new Date();

    if(start < today){
      this.errorMsg += "START DATE has already past.<br/>";
    }
    if(start > end){
      this.errorMsg += "END DATE is before START DATE.<br/>";
    }
  }

}
