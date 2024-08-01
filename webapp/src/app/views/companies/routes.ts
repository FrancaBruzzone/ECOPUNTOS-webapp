import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Empresas',
        },
        loadComponent: () =>
            import('./companies.component').then((m) => m.CompaniesComponent),
    },
];
