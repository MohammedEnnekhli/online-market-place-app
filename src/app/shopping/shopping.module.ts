import { NgModule } from '@angular/core';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { SharedModule } from 'shared/shared.module';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ProductsComponent,
    CheckOutComponent,
    ProductFilterComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent,
  ],
  imports: [SharedModule, ShoppingRoutingModule],
})
export class ShoppingModule {}
