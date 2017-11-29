import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { Assignment1127Component } from './component/assignment1127/assignment1127.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Assignment1127Component,
    
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
