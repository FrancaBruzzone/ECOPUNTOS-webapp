import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Inversiones',
    },
    loadComponent: () =>
      import('./investments.component').then((m) => m.InvestmentsComponent),
  },
];
