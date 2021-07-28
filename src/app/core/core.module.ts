import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, HomeComponent, LoginComponent],
  imports: [SharedModule, RouterModule.forChild([])], // we add routerModule here, because we use routerLink in NavbarComponent
  exports: [NavbarComponent],
})
export class CoreModule {}
