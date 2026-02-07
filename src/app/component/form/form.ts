import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePicker } from 'primeng/datepicker';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Employee } from '../../interface/employee.interface';
import { Shared } from '../../service/shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    FloatLabelModule,
    InputTextModule,
    InputNumberModule,
    DatePicker,
    CheckboxModule,
    ButtonModule,
  ],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  employeeForm: FormGroup;


  constructor(private fb: FormBuilder,private sharedservice:Shared,private router:Router,private activedRouted:ActivatedRoute) {
    this.employeeForm = this.fb.group({
      employee_Name: ['', Validators.required],
      employee_Age: [null as number | null, Validators.required],
      employee_Date_of_Birth: [null as Date | null, Validators.required],
      employee_EmailId: ['', [Validators.required, Validators.email]],
      employee_Image: [''],
      employee_Contact_Number: [null as number | null, Validators.required],
      employee_Id_Number: [null as number | string | null, Validators.required],
      employee_Salary_Package: [null as number | null, Validators.required],
      employee_Joining_Date: [null as Date | null, Validators.required],
      employee_Leaving_Date: [null as Date | null],
      employee_Active: [true],
      employee_Address: this.fb.group({
        employee_City_Name: ['', Validators.required],
        employee_City_Taluka: ['', Validators.required],
        employee_City_Dist: ['', Validators.required],
        employee_City_State: ['', Validators.required],
        employee_City_Pin_Code: [null as number | null, Validators.required],
      }),
    });
  }

  get addressGroup(): FormGroup {
    return this.employeeForm.get('employee_Address') as FormGroup;
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const value = this.employeeForm.value as Employee;
      console.log('Employee form value:', value);
      this.sharedservice.postEmployeeList(value).subscribe({
        next:(_resp:any)=>{
          console.log(_resp);
          this.router.navigate(['/dashboard'],{relativeTo:this.activedRouted});
        },
        error:(_error:Error)=>{
          console.log(_error);
        },
        complete:()=>{
          alert('Successfully Store Employee Details.....');
        }
      });
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }
}
