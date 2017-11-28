import { Component } from '@angular/core';
import {Employee} from './models/employee';
import { viewClassName } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular5 Bencys trials';
  activeView='list';
  selectedEmployee;
  newEmployee: Employee= new Employee('', null);   
  employees: Array<Employee>= [  
    new Employee('Benny', 50),
    new Employee('Baiju', 48),
    new Employee('Thomas', 44),
    new Employee('Vincent', 40)
  ];
  clearSelections(){
    this.employees.forEach(emp => emp.selected = false);
  }

  onSelectEmployee(employee: Employee) {
    this.clearSelections();
    employee.selected = true;
    this.selectedEmployee = employee;
  }

  addEmployee(employee){
    this.employees.push(this.newEmployee);
  }


 deleteEmployee(){
     this.employees.splice(this.selectedEmployee);
  }

 selectEmployee(employee){
    this.selectedEmployee = employee;
 
  }
 
  selectView(viewName){
    this.activeView = viewName;
  }

  }


 



