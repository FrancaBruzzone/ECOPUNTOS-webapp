import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Perfil',
        },
        loadComponent: () =>
            import('./profile.component').then((m) => m.ProfileComponent),
    },
];
