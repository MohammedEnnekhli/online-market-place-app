import { Order } from '../../../shared/models/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent {
  orders$: Observable<Order[]>;
  constructor(private os: OrderService) {
    this.orders$ = os.getOrders().valueChanges();
  }
}
