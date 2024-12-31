// Interface for User
export interface User {
  firstname: string;
  lastname: string;
  email: string;
  mobileNumber: string;
  password: string;
  gender: string;
  RoleId: number;
}

// Interface for LoginUser
export interface LoginUser {
  email: string;
  password: string;
  RoleId: number; 
}


// Interface for AdminLoginUser
export interface AdminLoginUser {
  email: string;
  password: string;
  RoleId: number; 
}


export interface Product {
  quantity: any;
  id: number;
  product_ID: any;
  product_name: string;
  category_id: number;
  material_type: string;
  image_url: string;
  in_Active: boolean;
  description: string;
  create_At: string;
  update_At: string;
  categoryName: string;
  price: number;
}

export interface Orders {
  orderId: string;
  orderName: string;
  order: string;
  quantity: number;
  totalPrice: string;
  status: string;
}

export interface Category {
  categoryId: number;
  name: string;
  description: string;
  createdAt: Date;
  categoryStatus: string;
}



// seller.component.ts
export interface AdminSeller {
  seller_Id: number;
  company_name: string;
  gst_number: string;
  company_address: string;
  company_email: string;
  company_mobile_number: string;
  logo: string;
  first_name?: string;
  last_name?: string;
  email: string;
  gender?: string;
  mobile_number?: string;
  address: string;
  status: string; 
  created_at: string;
  updated_at: string;
}


// cartitem data when the customer add something than cart summary is show

export interface CartItem {
  product_id: number;
  date: string;
  firstName: string;
  lastName: string;
  description: string;
  quantity: number;
  price: number;
  image_url: string;
}

export interface ChatMessage {
  user: string;
  message: string;
  read: boolean;
}


export interface SellerGraphData {
  product_name: string;
  quantity: number;
}

export interface SellerDashboardData {
  first_name: string;
  product_name: string;
  quantity: number;
}

// nisha da model  edit wala
export interface Client {
  id: number;
  name: string;
  mobilenumber: string;
  address: string;
  image: string;
  gender: string;
}

export interface Orders {
  customer_id: number;
  mobileNumber: string;
  firstName: string;
  product_name: string;
  quantity: number;
  paymentStatus: string;
}

// reset password for customer
export interface Client {
  id: number;
  oldpassword: string;
  newpassword: string;
}

// selelr-profile model nisha code ---->Seller- Profile

export interface Seller {
  id: number;
  registration_Id: number;
  firstName: string;
  email: string;
  mobileNumber: string;
  address: string;
  image: string;
  gender: string;
}

// <--------------------Admin Product chart graph for admin products-------------->

export interface ProductGraph {
  product_id: number;
  Product_name: string;
  product_quantity: string;
}
