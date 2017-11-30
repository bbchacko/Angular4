import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { EmpoyeeDetailsComponent } from './components/empoyee-details/empoyee-details.component';
import { EmployeeService } from './employee.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpoyeeDetailsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
