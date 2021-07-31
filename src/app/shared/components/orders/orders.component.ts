import { Component } from '@angular/core';
import { SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'shared/models/order';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  orders$: Observable<SnapshotAction<Order>[]>;
  constructor(private as: AuthService, private os: OrderService) {
    as.appUser$.subscribe((user) => {
      if (user.isAdmin) {
        this.orders$ = os.getOrders().snapshotChanges();
      } else {
        this.orders$ = as.user$.pipe(
          switchMap((u) => os.getOrdersByUser(u.uid).snapshotChanges())
        );
      }
    });
  }
}
