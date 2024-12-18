import { Routes } from '@angular/router';

export const OTHERS_ROUTES:Routes = [
  {path:'LayoutMain',loadComponent:()=>import('../../../Layouts/Public/layout-main/layout-main.component'),
    children: [
      {path: 'PageMain',loadComponent:()=>import('../../../Public/main-page/main-page.component')},
      {path: '', redirectTo: 'PageMain', pathMatch: 'full'},
    ]
  },
  {path: '', redirectTo: 'LayoutMain', pathMatch: 'full'},
];
