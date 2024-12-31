import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Product } from '../../models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: Product[] = []; // Declare products as an array of Product type
  showRegisterMessage: boolean = false; // Flag to show message to register

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts(); // Fetch products when the component initializes
  }

  getProducts(): void {
    this.dataService.getProducts().subscribe({
      next: (response) => {
        this.products = response; // Populate the products array
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  // Check if the user is signed up
  addToCart(product: Product): void {
    const isUserSignedUp = this.checkIfUserIsSignedUp();

    if (isUserSignedUp) {
      // Proceed with adding to the cart (You can implement cart functionality here)
      console.log('Product added to cart:', product);
    } else {
      this.showRegisterMessage = true; // Show the message to register first
    }
  }

  // Check if the user is signed up (customizable as per your authentication)
  checkIfUserIsSignedUp(): boolean {
    const user = localStorage.getItem('user');
    return !!user; // Return true if the user is found
  }

  // Handle closing the register message
  closeRegisterMessage(): void {
    this.showRegisterMessage = false;
  }

  // Navigate to sign-up page
  goToSignUp(): void {
    this.router.navigate(['/signup']);
  }

  viewMore(): void {
    const isUserSignedUp = this.checkIfUserIsSignedUp();
    
    if (isUserSignedUp) {
      this.router.navigate(['/customer/customer-dashboard']); // Navigate to the customer dashboard
    } else {
      this.router.navigate(['/signup']); // Redirect to signup page if not signed up
    }
  }
}
