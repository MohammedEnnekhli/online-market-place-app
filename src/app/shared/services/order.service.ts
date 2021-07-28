import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { ShoppingCartService } from './shopping-cart.service';
import { SharedModule } from 'shared/shared.module';

@Injectable()
export class OrderService {
  constructor(
    private db: AngularFireDatabase,
    private scs: ShoppingCartService
  ) {}

  async placeOrder(order: Order) {
    let result = await this.db.list('/orders').push(order);
    this.scs.clearCart();
    return result;
  }

  getOrders(): AngularFireList<Order> {
    return this.db.list('/orders');
  }

  getOrdersByUser(userId: string): AngularFireList<Order> {
    return this.db.list('/orders', (ref) =>
      ref.orderByChild('userId').equalTo(userId)
    );
  }

  getOrder(orderId: string): AngularFireObject<Order> {
    return this.db.object('/orders/' + orderId);
  }
}
