import { Component, Input } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent {
  @Input('category') category: string;
  categories$;

  constructor(cs: CategoryService) {
    this.categories$ = cs.getCategories().snapshotChanges();
  }
}
