import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gráficas por empresas',
    },
    loadComponent: () =>
      import('../graphiccompanies/graphic-companies.component').then(
        (m) => m.GraphicCompaniesComponent,
      ),
  },
];
