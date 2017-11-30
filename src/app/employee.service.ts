import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Employee} from './models/employee';


@Injectable()
export class EmployeeService {
  /* private  employees: Array<Employee>= [  
        new Employee('Benny', 50),
        new Employee('Baiju', 48),
        new Employee('Thomas', 44),
        new Employee('Vincent', 40)
      ];*/

      constructor(private http: HttpClient){

      }
      getEmployees(){
            return this.http.get('/assets/employee.json')
      }
}