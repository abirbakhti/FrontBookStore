import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './Components/booklist/booklist.component';
import { DefaultComponent } from './Components/default/default.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuardService } from './Service/auth-guard.service';

const routes: Routes = [
  { path: '',component: DefaultComponent, canActivate: [AuthGuardService], children: [
    { path: 'books',component: BooklistComponent, canActivate: [AuthGuardService]},
  ]},
  
  { path: 'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
