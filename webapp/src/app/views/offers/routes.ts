import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Ofertas',
        },
        loadComponent: () =>
            import('./offers.component').then((m) => m.OffersComponent),
    },
];
