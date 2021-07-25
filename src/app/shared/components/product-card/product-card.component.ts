import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product.model';
import { ShoppingCart } from 'shared/models/shopping-carts';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  @Input('show-actions') showActions: boolean = true;

  constructor(private scs: ShoppingCartService) {}

  addToCart() {
    this.scs.addToCart(this.product);
  }
}
