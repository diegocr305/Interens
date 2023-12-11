import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'portada',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'recuperar-contrasena',
    loadComponent: () => import('./recuperar-contrasena/recuperar-contrasena.page').then( m => m.RecuperarContrasenaPage)
  },
  {
    path: 'registrar',
    loadComponent: () => import('./registrar/registrar.page').then( m => m.RegistrarPage)
  },
  {
    path: 'recuperar-contrasena-verificado',
    loadComponent: () => import('./recuperar-contrasena-verificado/recuperar-contrasena-verificado.page').then( m => m.RecuperarContrasenaVerificadoPage)
  },
  {
    path: 'productos',
    loadComponent: () => import('./productos/productos.page').then( m => m.ProductosPage)
  },
  {
    path: 'perfil-producto',
    loadComponent: () => import('./perfil-producto/perfil-producto.page').then( m => m.PerfilProductoPage)
  },
  {
    path: 'portada',
    loadComponent: () => import('./portada/portada.page').then( m => m.PortadaPage)
  },
  {
    path: 'voluntario',
    loadComponent: () => import('./voluntario/voluntario.page').then( m => m.VoluntarioPage)
  },  {
    path: 'info-carrucel',
    loadComponent: () => import('./info-carrucel/info-carrucel.page').then( m => m.InfoCarrucelPage)
  },
  {
    path: 'ubicacion',
    loadComponent: () => import('./ubicacion/ubicacion.page').then( m => m.UbicacionPage)
  },
  {
    path: 'perfil-usuario',
    loadComponent: () => import('./perfil-usuario/perfil-usuario.page').then( m => m.PerfilUsuarioPage)
  },




];
