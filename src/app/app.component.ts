import { Component, OnInit } from '@angular/core';
import {Employee} from './models/employee';
import { viewClassName } from '@angular/compiler';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular5 Bencys trials';
  activeViewIndex=0;
  selectedEmployee;
  newEmployee: Employee= new Employee('', null); 

  menuList: Array<string> = ['Home', 'About', 'Contact'];  
 // sectionList: Array<string> = ['Name', 'Address', 'phone number'];//

  employees: Array<Employee>= [  
 new Employee('Benny', 50),
    new Employee('Baiju', 48),
    new Employee('Thomas', 44),
    new Employee('Vincent', 40)
  ];

  buttonList: Array<string>=['View Emp', 'Add Emp'];

  constructor(private service : EmployeeService){


  }

  ngOnInit(){
    this.service.getEmployees()
    .subscribe((res: Array<Employee>) => {
      this.employees = res
    }); 
  }

  onMenuClick(item){
    alert('menu is clicked is ' + item);
  }

  onSectionClick(item){
    alert('section is clicked is ' + item);
  }

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


 deleteEmployee(empIndex){
     this.employees.splice(empIndex,1);
  }

 selectEmployee(employee){
    this.selectedEmployee = employee;
 
  }
 
  selectView(viewIndex){
    this.activeViewIndex = viewIndex;
  }

 

  }
  

 



