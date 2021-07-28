import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrdersComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrdersComponent,
    OrderDetailsComponent,
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],
  providers: [
    AuthService,
    CategoryService,
    OrderService,
    ProductService,
    ShoppingCartService,
    UserService,
  ],
})
export class SharedModule {}
