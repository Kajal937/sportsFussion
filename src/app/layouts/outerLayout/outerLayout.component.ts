import { Component } from '@angular/core';

@Component({
  selector: 'app-outer-layout',
  templateUrl: './outerLayout.component.html',
  styleUrls: ['./outerLayout.component.css']
})
export class OuterLayoutComponent {
  showHeaderFooter: boolean = true; // Flag to control header and footer visibility

  // Method to hide header and footer
  hideHeaderFooter() {
    this.showHeaderFooter = false;
  }

  // Method to show header and footer
  showHeaderFooterMethod() {
    this.showHeaderFooter = true;
  }
}
