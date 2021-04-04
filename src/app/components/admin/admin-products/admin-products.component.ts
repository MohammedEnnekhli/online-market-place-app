import { Component, OnInit } from '@angular/core';
import { SnapshotAction } from '@angular/fire/database';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/sevices/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products: SnapshotAction<Product>[];
  filteredProducts: SnapshotAction<Product>[];
  subscription: Subscription;

  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.ps
      .getAllProducts()
      .snapshotChanges()
      .subscribe(
        (products) => (this.filteredProducts = this.products = products)
      );
  }
  deleteProduct(productId: string) {
    if (confirm('Are you sure you want to delete this product?'))
      this.ps.deleteProduct(productId);
  }

  filter(query: string) {
    this.filteredProducts = query
      ? this.products.filter((p) =>
          p.payload.val().title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products;
  }
}
