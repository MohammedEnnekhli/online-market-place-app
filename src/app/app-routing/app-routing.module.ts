import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from '../components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from '../components/admin/admin-products/admin-products.component';
import { CheckOutComponent } from '../components/check-out/check-out.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { MyOrdersComponent } from '../components/my-orders/my-orders.component';
import { OrderSuccessComponent } from '../components/order-success/order-success.component';
import { ProductsComponent } from '../components/products/products.component';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'my/orders', component: MyOrdersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
