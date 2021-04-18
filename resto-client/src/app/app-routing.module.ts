import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { AdminGuard } from './guards/admin.guard';



const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent, canActivate: [AdminGuard] },
  { path: "orders", component: OrdersComponent, canActivate: [AdminGuard] },
  { path: "order-details/:orderNumber", component: OrderDetailsComponent, canActivate: [AdminGuard] },
  { path: "restaurants", component: RestaurantsComponent, canActivate: [AdminGuard] },
  { path: "logout", component: LogoutComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
