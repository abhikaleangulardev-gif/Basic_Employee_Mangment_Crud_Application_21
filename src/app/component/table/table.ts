import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Employee } from '../../interface/employee.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule, CardModule, Button, TableModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
   
    private router = inject(Router);

  employees: Employee[] = [];
  columns: { field: keyof Employee; header: string }[] = [
    { field: 'employee_Id_Number', header: 'Id' },
    { field: 'employee_Name', header: 'Name' },
    { field: 'employee_Age', header: 'Age' },
    { field: 'employee_EmailId', header: 'Email' },
    { field: 'employee_Contact_Number', header: 'Contact' },
    { field: 'employee_Salary_Package', header: 'Salary' },
    { field: 'employee_Joining_Date', header: 'Joining Date' },
    { field: 'employee_Active', header: 'Active' },
  ];

  addEmployee() {
    this.router.navigate(['/form']);
  }
}
