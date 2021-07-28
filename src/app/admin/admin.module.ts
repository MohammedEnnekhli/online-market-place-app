import { NgModule } from '@angular/core';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SharedModule } from 'shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminProductsComponent, ProductFormComponent],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
