import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MenubarModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  constructor() { }

  ngOnInit() {
   
  }

  logout() {
    // Add your logout logic (e.g. clear session, navigate to login)
    console.log('Logout clicked');
  }
}
