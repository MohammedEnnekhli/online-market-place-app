import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/sevices/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user: User;

  constructor(private auth: AuthService, private router: Router) {
    auth.appUser$.subscribe((user: User) => (this.user = user));
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
