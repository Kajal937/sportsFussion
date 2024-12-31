import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-layout-header',
  templateUrl: './admin-layout-header.component.html',
  styleUrls: ['./admin-layout-header.component.css']
})
export class AdminLayoutHeaderComponent {
  @Output() toggleSidebarEvent = new EventEmitter<void>(); // Emit toggle event
  isSidebarVisible = false; // Sidebar visibility state

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Toggle the state
    this.toggleSidebarEvent.emit(); // Notify the parent component
  }
}

