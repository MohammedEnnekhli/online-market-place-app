import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard } from 'app/admin/guards/admin-auth.guard';
import { AuthGuard } from 'app/core/guards/auth.guard';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path: 'admin/orders',
    component: OrdersComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  { path: 'my/orders', component: OrdersComponent, canActivate: [AuthGuard] },
  {
    path: 'order-details/:id',
    component: OrderDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
