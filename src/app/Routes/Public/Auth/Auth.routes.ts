import { Routes } from "@angular/router";

export const AUTH_ROUTES:Routes = [
  {path: 'login',loadComponent:()=>import('../../../Auth/login/login.component')},
  {path: 'register',loadComponent:()=>import('../../../Auth/register/register.component')}
];
