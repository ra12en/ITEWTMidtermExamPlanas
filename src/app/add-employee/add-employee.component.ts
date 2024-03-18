// add-employee.component.ts
import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  newEmployee: Employee = {} as Employee;

  constructor(private employeeService: EmployeeService) { }

  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee);
    this.newEmployee = {} as Employee; // Reset the form
  }
}
