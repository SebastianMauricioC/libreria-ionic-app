import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule), ...canActivate(()=> redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'libro',
    loadChildren: () => import('./libro/libro.module').then( m => m.LibroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./categoria/comics/comics.module').then( m => m.ComicsPageModule)
  },
  {
    path: 'gastronomia',
    loadChildren: () => import('./categoria/gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },
  {
    path: 'ciencias',
    loadChildren: () => import('./categoria/ciencias/ciencias.module').then( m => m.CienciasPageModule)
  },
  {
    path: 'literatura',
    loadChildren: () => import('./categoria/literatura/literatura.module').then( m => m.LiteraturaPageModule)
  },
  {
    path: 'economia',
    loadChildren: () => import('./categoria/economia/economia.module').then( m => m.EconomiaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
