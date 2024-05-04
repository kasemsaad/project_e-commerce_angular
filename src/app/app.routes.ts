import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    title: 'Home',
  },

  {
    path:'Home',
    component:HomeComponent,
    title: 'Home',
  },


  {
    path:'login',
    component:LoginComponent,
    title: 'login',
  },
  {
    path:'register',
    component:RegisterComponent,
    title: 'register',
  },
  {
    path:'cart',
    component:CartComponent,
    title: 'cart',

  },
  {
    path:'details/:id',
    component:DetailsComponent,
    title: 'Details',

  },
  {
    path:'**',
    component:NotFoundComponent,
    title: 'Not found page',
  }
];
