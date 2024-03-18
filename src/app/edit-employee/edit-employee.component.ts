// edit-employee.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.fetchEmployeeDetails();
  }

  fetchEmployeeDetails() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employee = this.employeeService.getEmployeeById(id);
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee);
    // Optionally, you can navigate to the employee list or perform other actions after updating
  }
}
