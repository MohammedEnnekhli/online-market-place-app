import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-carts';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  constructor(private scs: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.scs.getCart();
  }

  clearCart() {
    this.scs.clearCart();
  }
}
