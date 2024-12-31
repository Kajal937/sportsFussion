// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   isMenuOpen: boolean = false;

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }
// }



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  userRoleId: number | null = null; // Store the role ID of the user

  ngOnInit() {
    // Simulating fetching the user's role, replace this with actual logic
    this.userRoleId = this.getRoleFromLocalStorage(); // Example: Retrieve role from localStorage or service
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Simulated method to fetch role from storage (replace with your implementation)
  private getRoleFromLocalStorage(): number | null {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.roleId || null; // Adjust according to your data structure
  }
}
