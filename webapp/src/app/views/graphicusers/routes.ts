import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gráficas por usuario',
    },
    loadComponent: () =>
      import('./graphic-users.component').then((m) => m.GraphicUsersComponent),
  },
];
