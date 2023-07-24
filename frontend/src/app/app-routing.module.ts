import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMainComponent } from './Components/user/user-main/user-main.component';
import { Page404Component } from './Components/page404/page404.component';
import { AdminMainComponent } from './Components/admin/admin-main/admin-main.component';
import { LoginComponent } from './Components/login/login.component';
import { AddNewComponent } from './Components/admin/add-new/add-new.component';
import { EditHolidayComponent } from './Components/admin/edit-holiday/edit-holiday.component';
import { ChartReportComponent } from './Components/admin/chart-report/chart-report.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"holidays", component:UserMainComponent},
  {path:"admin/holidays", component:AdminMainComponent},
  {path:"admin/addNewHoliday", component:AddNewComponent},
  {path:"admin/editHolidayById/:id",component:EditHolidayComponent},
  {path:"admin/chartReport", component:ChartReportComponent},
  {path:"**", component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
