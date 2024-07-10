import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Integrantes',
        },
        loadComponent: () =>
            import('./users.component').then((m) => m.UsersComponent),
    },
];
