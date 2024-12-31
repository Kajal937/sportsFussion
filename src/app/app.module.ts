import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './outer/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AboutComponent } from './outer/about/about.component';
import { DataService } from './services/data.service';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { SellerLayoutComponent } from './layouts/sellerLayout/sellerLayout.component';
import { CustomerLayoutComponent } from './layouts/customerLayout/customerLayout.component';
import { AdminLayoutsComponent } from './layouts/adminLayout/adminLayout.component';
import { OuterLayoutComponent } from './layouts/outerLayout/outerLayout.component';
import { SignInComponent } from './outer/signIn/signIn.component';
import { SignupComponent } from './outer/signup/signup.component';
import { HeaderComponent } from './layouts/outerLayout/header/header.component';
import { FooterComponent } from './layouts/outerLayout/footer/footer.component';
import { ContactusComponent } from './outer/contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerHeaderComponent } from './layouts/customerLayout/customer-header/customer-header.component';
import { CustomerFooterComponent } from './layouts/customerLayout/customer-footer/customer-footer.component';
import { SidebarComponent } from './customer/sidebar/sidebar.component';
import { ChatsComponent } from './customer/chats/chats.component';
import { AdminLayoutHeaderComponent } from './layouts/adminLayout/admin-layout-header/admin-layout-header.component';
import { AdminLayoutFooterComponent } from './layouts/adminLayout/admin-layout-footer/admin-layout-footer.component';
import { SellerHeaderComponent } from './layouts/sellerLayout/seller-header/seller-header.component';
import { SellerFooterComponent } from './layouts/sellerLayout/seller-footer/seller-footer.component';
import { UserMangementComponent } from './admin/user-mangement/user-mangement.component';
import { CustomerSidebarComponent } from './layouts/customerLayout/customer-sidebar/customer-sidebar.component';
import { AdminLayoutSidebarComponent } from './layouts/adminLayout/admin-layout-sidebar/admin-layout-sidebar.component';
import { SellerSidebarComponent } from './layouts/sellerLayout/seller-sidebar/seller-sidebar.component';
import { AdminLoginComponent } from './outer/admin-login/admin-login.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { provideToastr } from 'ngx-toastr';
import { authInterceptor } from './interceptor/auth.interceptor';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { AddSellerComponent } from './admin/admin-seller/add-seller/add-seller.component';
import { ListSellerComponent } from './admin/admin-seller/list-seller/list-seller.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { ListProductComponent } from './admin/admin-products/list-product/list-product.component';
import { AddProductComponent } from './admin/admin-products/add-product/add-product.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { CustomerOrdersComponent } from './customer/customer-orders/customer-orders.component';
import { AdminChatsComponent } from './admin/admin-chats/admin-chats.component';
import { ChatService } from './services/chat.service';
import { MyProfileComponent } from './customer/profile/my-profile/my-profile.component';
import { ResetPasswordComponent } from './customer/profile/reset-password/reset-password.component';
import { SellerProfileComponent } from './seller/seller-profile/seller-profile.component';
import { SellerPasswordComponent } from './seller/seller-password/seller-password.component';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import { BaseChartDirective} from 'ng2-charts';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CardComponent } from './outer/card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SignInComponent,
    ContactusComponent,
    AdminLayoutsComponent,
    CustomerLayoutComponent, 
    OuterLayoutComponent,
    SellerLayoutComponent, 
    AdminComponent,
    CustomerHeaderComponent,
    CustomerFooterComponent,
    SidebarComponent,
    ChatsComponent,
    AdminLayoutHeaderComponent,
    AdminLayoutFooterComponent,
    SellerHeaderComponent,
    SellerFooterComponent,
    UserMangementComponent,
    CustomerSidebarComponent,
    AdminLayoutSidebarComponent,
    SellerSidebarComponent,
    AdminLoginComponent,
    AdminCategoriesComponent,
    ListSellerComponent,
    AddSellerComponent,
    AdminOrdersComponent,
    CustomerDashboardComponent,
    ListProductComponent,
    AddProductComponent,
    SellerDashboardComponent,
    CustomerOrdersComponent,
    AdminChatsComponent,
    ChatsComponent,
    MyProfileComponent,
    ResetPasswordComponent,
    SellerProfileComponent,
    SellerPasswordComponent,
    AdminDashboardComponent,
    CardComponent,
    OuterLayoutComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule, 
    FormsModule,
    CommonModule ,
    CurrencyPipe,
    HighchartsChartModule,
    BaseChartDirective,
    jqxChartModule
    
  ],
  providers: [
    DataService, 
    DatePipe, 
    ChatService,
    provideToastr(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true
    },
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
