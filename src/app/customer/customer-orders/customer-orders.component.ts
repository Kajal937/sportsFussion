import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartItem, Product } from '../../models/user';
import { DataService } from '../../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css'],
})
export class CustomerOrdersComponent implements OnInit {
  totalPrice: number = 0;
  cartData: CartItem[] = [];

  constructor(
    private dataService: DataService,
    private cdRef: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.dataService.getCartItems().subscribe({
      next: (response) => {
        this.cartData = response;
        this.updateTotalPrice();
      },
      error: (err) => {
        console.error('Error fetching cart data:', err);
      },
    });
  }

  incrementQuantity(productId: number, price: number): void {
    const item = this.cartData.find((item) => item.product_id === productId);
    if (item) {
      this.dataService.updateCartItemQuantity(productId, item.quantity + 1).subscribe({
        next: () => {
          item.quantity += 1;
          this.updateTotalPrice();
          this.toastr.success(`Quantity increased for product.`);
        },
        error: (err) => {
          console.error('Error incrementing item quantity:', err);
          this.toastr.error('Failed to increase quantity. Please try again.');
        },
      });
    }
  }

  decrementQuantity(productId: number, price: number): void {
    const item = this.cartData.find((item) => item.product_id === productId);
    if (item && item.quantity > 1) {
      this.dataService.updateCartItemQuantity(productId, item.quantity - 1).subscribe({
        next: () => {
          item.quantity -= 1;
          this.updateTotalPrice();
          this.toastr.success(`Quantity decreased for product.`);
        },
        error: (err) => {
          console.error('Error decrementing item quantity:', err);
          this.toastr.error('Failed to decrease quantity. Please try again.');
        },
      });
    } else if (item && item.quantity === 1) {
      this.deleteCartItem(productId);
    }
  }

  deleteCartItem(productId: number): void {
    this.dataService.deleteCartItems(productId).subscribe({
      next: () => {
        this.cartData = this.cartData.filter((item) => item.product_id !== productId);
        this.updateTotalPrice();
        this.toastr.success(`Product removed successfully.`);
      },
      error: (err) => {
        console.error('Error removing product:', err);
        this.toastr.error('Failed to remove product. Please try again.');
      },
    });
  }

  updateTotalPrice(): void {
    this.totalPrice = this.cartData.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    this.cdRef.detectChanges();
  }
}
