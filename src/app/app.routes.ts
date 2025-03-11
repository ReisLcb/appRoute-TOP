import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about', // nome da rota para a pagina About, podemos alterá-la
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage) // caminho para a página about dentro dos arquivos do projeto
  },
];
