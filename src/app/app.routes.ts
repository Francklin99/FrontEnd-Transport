import { Routes } from '@angular/router';
import { OTHERS_ROUTES } from './Routes/Public/Others/Others.routes';
import { AUTH_ROUTES } from './Routes/Public/Auth/Auth.routes';
import { MAIN_ROUTES } from './Routes/Private/Main/main.routes';

export const routes: Routes = [
  ...OTHERS_ROUTES,
  ...AUTH_ROUTES,
  ...MAIN_ROUTES
];
