import { Routes } from '@angular/router';

export const OTHERS_ROUTES:Routes = [
  {path:'PageMain',loadComponent:()=>import('../../../Layouts/Public/page-main/page-main.component')},
  {path: '', redirectTo: 'PageMain', pathMatch: 'full'},
];
