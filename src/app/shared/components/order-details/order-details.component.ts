import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnDestroy {
  order: Order;
  subscription: Subscription;
  totalPrice: number = 0;
  constructor(
    private os: OrderService,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscription = this.os
      .getOrder(this.activatedRoute.snapshot.params['id'])
      .valueChanges()
      .subscribe((order) => {
        this.order = order;
        this.totalPrice = order.items.reduce(
          (acc, curr) => acc + curr.totalPrice,
          0
        );
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
