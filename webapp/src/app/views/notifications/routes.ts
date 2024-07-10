import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Notificaciones',
        },
        loadComponent: () =>
            import('./notifications.component').then(
                (m) => m.NotificationsComponent,
            ),
    },
];
