import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Canjes',
        },
        loadComponent: () =>
            import('./transactions.component').then(
                (m) => m.TransactionsComponent,
            ),
    },
];
