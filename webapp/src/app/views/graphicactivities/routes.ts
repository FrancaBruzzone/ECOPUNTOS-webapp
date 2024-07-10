import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Gráficas por actividad',
        },
        loadComponent: () =>
            import('./graphic-activities.component').then(
                (m) => m.GraphicActivitiesComponent,
            ),
    },
];
