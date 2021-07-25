import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from '../components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from '../components/admin/admin-products/admin-products.component';
import { ProductFormComponent } from '../components/admin/product-form/product-form.component';
import { CheckOutComponent } from '../components/check-out/check-out.component';
import { LoginComponent } from '../components/login/login.component';
import { MyOrdersComponent } from '../components/my-orders/my-orders.component';
import { OrderSuccessComponent } from '../components/order-success/order-success.component';
import { ProductsComponent } from '../components/products/products.component';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  {
    path: 'order-success/:id',
    component: OrderSuccessComponent,
    canActivate: [AuthGuard],
  },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  {
    path: 'my/order-detail/:id',
    component: MyOrdersComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  {
    path: 'admin/products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  {
    path: 'admin/order-details/:id',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
