import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'shared/models/order';
import { ShoppingCart } from 'shared/models/shopping-carts';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  userId: string;
  subscription: Subscription;
  constructor(
    private os: OrderService,
    private as: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.as.user$.subscribe(
      (user) => (this.userId = user.uid)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  placeOrder(shipping) {
    let order = new Order(this.cart, shipping, this.userId);
    this.os.placeOrder(order);
    this.router.navigate(['my/orders']);
  }
}
