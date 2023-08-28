import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user.page').then( m => m.UserPage)
  },
  {
    path: 'recuperar-contrasena',
    loadComponent: () => import('./recuperar-contrasena/recuperar-contrasena.page').then( m => m.RecuperarContrasenaPage)
  },
];
