import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Actividades sustentables',
        },
        loadComponent: () =>
            import('./activities.component').then((m) => m.ActivitiesComponent),
    },
];
