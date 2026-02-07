import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../interface/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  myEmployeeApiUrl: string = 'https://employeemanagementapplic-5d8a5-default-rtdb.europe-west1.firebasedatabase.app/employeeData.json';

  private http = inject(HttpClient);

  postEmployeeList(myEmployeeObj:Employee) {
      return this.http.post(this.myEmployeeApiUrl,myEmployeeObj);
  }


  getEmployeeList() {
    return this.http.get(this.myEmployeeApiUrl);
  }

  updateEmployeeList(empId: number, myEmployeeObj: Employee) {
    return this.http.put(`${this.myEmployeeApiUrl}/${empId}`, myEmployeeObj);
  }

  deleteEmployeeList(empId: number) {
    return this.http.delete(`${this.myEmployeeApiUrl}/${empId}`);
  }
}
