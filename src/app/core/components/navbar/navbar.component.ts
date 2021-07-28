import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from 'shared/models/user.model';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCart } from 'shared/models/shopping-carts';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: User;
  cart$: Observable<ShoppingCart>;

  constructor(
    private auth: AuthService,
    private router: Router,
    private scs: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.auth.appUser$.subscribe((user: User) => (this.user = user));
    this.cart$ = await this.scs.getCart();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
