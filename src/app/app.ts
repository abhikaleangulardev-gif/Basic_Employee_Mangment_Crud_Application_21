import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Dashboard } from "./component/dashboard/dashboard";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Dashboard, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basicCrudEmployeeMangment');
}
