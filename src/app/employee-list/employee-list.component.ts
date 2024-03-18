// employee-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id); // Correctly delete only the specified employee
    // Optionally, you can also refresh the employee list here
    this.employees = this.employeeService.getEmployees();
  }
}
