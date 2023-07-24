import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MainComponent } from './Layout/main/main.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserMainComponent } from './Components/user/user-main/user-main.component';
import { UserNavBarComponent } from './Components/user/user-nav-bar/user-nav-bar.component';
import { AdminMainComponent } from './Components/admin/admin-main/admin-main.component';
import { AdminNavBarComponent } from './Components/admin/admin-nav-bar/admin-nav-bar.component';
import { Page404Component } from './Components/page404/page404.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewComponent } from './Components/admin/add-new/add-new.component';
import { EditHolidayComponent } from './Components/admin/edit-holiday/edit-holiday.component';
import { DeleteModalComponent } from './Components/admin/delete-modal/delete-modal.component';
import { ChartReportComponent } from './Components/admin/chart-report/chart-report.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    UserMainComponent,
    UserNavBarComponent,
    AdminMainComponent,
    AdminNavBarComponent,
    Page404Component,
    AddNewComponent,
    EditHolidayComponent,
    DeleteModalComponent,
    ChartReportComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    CanvasJSAngularChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
