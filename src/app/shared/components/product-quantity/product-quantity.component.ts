import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product.model';
import { ShoppingCart } from 'shared/models/shopping-carts';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css'],
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private scs: ShoppingCartService) {}

  addToCart() {
    this.scs.addToCart(this.product);
  }

  removeFromCart() {
    this.scs.removeFromCart(this.product);
  }
}
