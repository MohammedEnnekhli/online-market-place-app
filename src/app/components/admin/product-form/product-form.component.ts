import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Product } from 'shared/models/product.model';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$;
  productId: string;
  product: Product = { category: '', title: '', price: 0, imageUrl: '' };
  constructor(
    private cs: CategoryService,
    private ps: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    if (this.productId)
      this.ps
        .getProduct(this.productId)
        .valueChanges()
        .pipe(take(1))
        .subscribe((p) => (this.product = p)); // operator take is used for unsubscribing from the obs after one sub.

    this.categories$ = this.cs.getCategories().snapshotChanges();
  }

  save(product: Product) {
    if (this.productId) this.ps.updateProduct(this.productId, product);
    else this.ps.createProduct(product);

    this.router.navigate(['/admin/products']);
  }
}
