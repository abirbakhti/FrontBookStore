import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookManagementComponent } from './Components/book-management/book-management.component';
import { BooklistComponent } from './Components/booklist/booklist.component';
import { CartComponent } from './Components/cart/cart.component';
import { CommandComponent } from './Components/command/command.component';
import { DefaultComponent } from './Components/default/default.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuardService } from './Service/auth-guard.service';

const routes: Routes = [
  { path: '',component: DefaultComponent, canActivate: [AuthGuardService], children: [
    { path: '',component: HomeComponent, canActivate: [AuthGuardService]},
    { path: 'books',component: BooklistComponent, canActivate: [AuthGuardService]},
    { path: 'cart',component: CartComponent, canActivate: [AuthGuardService]},
    { path: 'bookManagement',component: BookManagementComponent, canActivate: [AuthGuardService]},
    { path: 'commands',component: CommandComponent, canActivate: [AuthGuardService]},
  ]},
  
  { path: 'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
