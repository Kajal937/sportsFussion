import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user';
import { OuterLayoutComponent } from '../../layouts/outerLayout/outerLayout.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  roles = [
    { displayName: 'Admin', value: 1 },
    { displayName: 'Customer', value: 2 },
    { displayName: 'Seller', value: 3 },
  ];

  signUpForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    RoleId: new FormControl('', [Validators.required]), // Consistent naming
  });

  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar,
    outerLayoutComponent: OuterLayoutComponent
  ) {}

  signUpUser() {
    if (this.signUpForm.valid) {
      // Define the userData object based on the form values
      const userData: User = {
        firstname: this.signUpForm.value.firstname || '',
        lastname: this.signUpForm.value.lastname || '',
        email: this.signUpForm.value.email || '',
        gender: this.signUpForm.value.gender || '',
        mobileNumber: this.signUpForm.value.mobileNumber || '',
        password: this.signUpForm.value.password || '',
        RoleId: Number(this.signUpForm.value.RoleId) || 0,
      };

      // Check RoleId to decide which API to call
      if (userData.RoleId === 2) {
        // Call CustomerRegisterUser API for RoleId = 2
        this.dataService.CustomerRegisterUser(userData).subscribe(
          (response) => {
            this.snackBar.open('Customer registered successfully', 'Close', {
              duration: 3000,
            });
            this.signUpForm.reset();
          },
          (error) => {
            this.snackBar.open(
              'Customer registration failed. Try again.',
              'Close',
              { duration: 3000 }
            );
          }
        );
      } else {
        // Call registerUser API for other RoleIds
        this.dataService.registerUser(userData).subscribe(
          (response) => {
            this.snackBar.open('Registered successfully', 'Close', {
              duration: 3000,
            });
            this.signUpForm.reset();
          },
          (error) => {
            this.snackBar.open('Registration failed. Try again.', 'Close', {
              duration: 3000,
            });
          }
        );
      }
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    // Hide header and footer on Sign Up page
    // this.OuterLayoutComponent.hideHeaderFooter();
  }
}
