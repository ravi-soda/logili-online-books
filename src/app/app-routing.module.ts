import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    
  })]
})
export class AppRoutingModule {}