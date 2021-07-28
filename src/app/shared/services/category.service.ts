import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { SharedModule } from 'shared/shared.module';

@Injectable()
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  getCategories() {
    return this.db.list('/categories', (ref) => ref.orderByChild('name')); // sort categories by their names
  }
}
