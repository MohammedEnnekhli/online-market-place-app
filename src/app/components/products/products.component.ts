import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'shared/models/product.model';
import { ProductService } from 'shared/services/product.service';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-carts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filtredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private ps: ProductService,
    private route: ActivatedRoute,
    private scs: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.cart$ = await this.scs.getCart();
    this.populateProducts();
  }

  private populateProducts() {
    this.ps
      .getAllProducts()
      .valueChanges(null, { idField: 'id' })
      .pipe(
        switchMap((products: Product[]) => {
          this.products = products;
          return this.route.queryParamMap;
        })
      )
      .subscribe((param) => {
        this.category = param.get('category');
        this.applyFilter();
      });
  }
  private applyFilter() {
    this.filtredProducts = this.category
      ? this.products.filter((p) => p.category === this.category)
      : this.products;
  }
}
