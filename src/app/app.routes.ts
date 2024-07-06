import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./cocktail-detiail/cocktail-detiail.component').then(
        (mod) => mod.CocktailDetiailComponent
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: 'list',
    loadComponent: () =>
      import('./cocktail-list/cocktail-list.component').then(
        (mod) => mod.CocktailListComponent
      ),
  },
];
