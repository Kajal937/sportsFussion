import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminLoginUser } from '../models/user';

interface LoginData {
  email: string;
  password: string;
  RoleId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7232/api/Equipment'; // Your API endpoint

  constructor(private http: HttpClient) {}

  login(data: LoginData): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  
    // For admin login
    loginAdmin(data: AdminLoginUser): Observable<any> {
      return this.http.post(`${this.apiUrl}/adminloginlogin`, data); 
    }
  

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
