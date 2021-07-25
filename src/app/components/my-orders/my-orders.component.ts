import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'shared/models/order';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent {
  orders$: Observable<Order[]>;
  constructor(private as: AuthService, private os: OrderService) {
    this.orders$ = as.user$.pipe(
      switchMap((u) => os.getOrdersByUser(u.uid).valueChanges())
    );
  }
}
