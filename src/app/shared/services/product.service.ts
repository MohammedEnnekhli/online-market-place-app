import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';
import { SharedModule } from 'shared/shared.module';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  createProduct(product) {
    return this.db.list('/products').push(product);
  }

  getAllProducts(): AngularFireList<Product> {
    return this.db.list('/products');
  }

  getProduct(productId: string): AngularFireObject<Product> {
    return this.db.object('/products/' + productId);
  }

  updateProduct(productId: string, product: Product) {
    return this.db.object('/products/' + productId).update(product);
  }

  deleteProduct(productId: string) {
    return this.db.object('/products/' + productId).remove();
  }
}
