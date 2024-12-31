import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Product } from '../../../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})

export class AddProductComponent implements OnInit {
  addProductForm!: FormGroup;
  categories: any[] = []; // Array to hold category data from the API
  imageBase64: string = ''; // To hold the Base64 encoded string of the image

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private toastr: ToastrService
  ) {}

 
 ngOnInit(): void {
    this.addProductForm = this.fb.group({
      product_name: ['', [Validators.required, Validators.minLength(3)]], // Added minLength
      categoryName: ['', Validators.required], // Make categoryName required
      material_type: ['', Validators.required],
      image_url: ['', Validators.required], // Required because we are handling it in a separate way
      status: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]], // Added minLength for description
      createdDate: [new Date(), Validators.required], // Set a default value
      updatedAt: [''],
      price: ['', [Validators.required, Validators.min(0.01)]], // Added min validation for price
    });


    // Fetch categories for the dropdown
    this.fetchCategories();
  }

  // Method to fetch categories from the API
  fetchCategories(): void {
    this.dataService.getCategories().subscribe(
      (response: any) => {
        this.categories = response; // Assuming API returns an array of categories
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  // Method to handle file input change and convert to Base64
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.convertToBase64(file);
    }
  }

  // Convert the image file to Base64
  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageBase64 = reader.result as string; // Store the Base64 string
      this.addProductForm.patchValue({ image_url: this.imageBase64 }); // Update form with Base64 value
    };
    reader.readAsDataURL(file); // Convert the file to Base64
  }

  // Submit form and add product
  onSubmit(): void {
    if (this.addProductForm.valid) {
      const productData: Product = this.addProductForm.value;

      // Ensure categoryName is defined, if undefined use a default
      const categoryName = productData.categoryName || 'DefaultCategory';

      // Call the service method to add the product
      this.dataService.addProduct(productData, categoryName).subscribe(
        (response: Product) => {
          console.log('Product added successfully:', response);
          this.toastr.success('Product added successfully')
          this.addProductForm.reset(); // Reset the form on success
          this.router.navigate(['admin/list-product']);

        },
        (error: any) => {
          console.error('Error adding product:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}