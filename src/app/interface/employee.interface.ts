import { Address } from "./address.interface";

export interface Employee{
    employee_Name:string,
    employee_Age:number,
    employee_Date_of_Birth:Date,
    employee_EmailId:string,
    employee_Image:string,
    employee_Contact_Number:number,
    employee_Id_Number:number | string,
    employee_Salary_Package:number,
    employee_Joining_Date:Date,
    employee_Leaving_Date?:Date,
    employee_Active:boolean,
    employee_Address:Address
}