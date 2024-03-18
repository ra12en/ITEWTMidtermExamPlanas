// employee.service.ts
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = []; // Initialize with some sample data if needed

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee {
    return this.employees.find(emp => emp.EmployeeId === id);
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee); // Add the new employee to the array
  }

  updateEmployee(updatedEmployee: Employee) {
    const index = this.employees.findIndex(emp => emp.EmployeeId === updatedEmployee.EmployeeId);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.EmployeeId !== id);
  }
}
