import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
name = "welcome";
  Delaware(){
    this.name="Newark";
  }
  selectedEmployee;
   
  employees: Array<object>=[
    {
      name: 'Bency',
      age: 21
    },
    {
      name: 'Ancy',
      age: 22
    },
    {
      name: 'Jancy',
      age: 18
    }
  ];
  selectEmployee(employee){
    this.selectedEmployee = employee;

  }


 

}


