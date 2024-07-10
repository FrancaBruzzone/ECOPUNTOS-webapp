import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Producto',
        },
        loadComponent: () =>
            import('./product.component').then((m) => m.ProductComponent),
    },
];
