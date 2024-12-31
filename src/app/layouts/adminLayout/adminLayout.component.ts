import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './adminLayout.component.html',
  styleUrls: ['./adminLayout.component.css']
})
export class AdminLayoutsComponent {
  isSidebarVisible = false; // Sidebar visibility state

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Toggle the sidebar visibility
    console.log('Sidebar visibility:', this.isSidebarVisible);
  }
}


