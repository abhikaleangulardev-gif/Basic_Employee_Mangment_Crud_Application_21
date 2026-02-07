import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Table } from "../table/table";

@Component({
  selector: 'app-dashboard',
  imports: [Header, Table],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
