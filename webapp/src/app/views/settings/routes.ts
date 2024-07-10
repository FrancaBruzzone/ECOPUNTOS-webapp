import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Configuraciones',
        },
        loadComponent: () =>
            import('./settings.component').then((m) => m.SettingsComponent),
    },
];
