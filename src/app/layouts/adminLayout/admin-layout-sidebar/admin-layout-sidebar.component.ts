import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-layout-sidebar',
  templateUrl: './admin-layout-sidebar.component.html',
  styleUrls: ['./admin-layout-sidebar.component.css']
})
export class AdminLayoutSidebarComponent {
  @Input() isSidebarVisible: boolean = false; // Receive state from parent
}

