import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { AuthenticationService } from './views/authentication/authentication.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home',
        },
        children: [
            {
                path: 'settings',
                loadChildren: () =>
                    import('./views/settings/routes').then((m) => m.routes),
                data: { allowedRoles: ['User', 'Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./views/dashboard/routes').then((m) => m.routes),
                data: { allowedRoles: ['User', 'Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'users',
                loadChildren: () =>
                    import('./views/users/routes').then((m) => m.routes),
                data: { allowedRoles: ['Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'investments',
                loadChildren: () =>
                    import('./views/investments/routes').then((m) => m.routes),
                data: { allowedRoles: ['Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'offers',
                loadChildren: () =>
                    import('./views/offers/routes').then((m) => m.routes),
                data: { allowedRoles: ['User', 'Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'product',
                loadChildren: () =>
                    import('./views/product/routes').then((m) => m.routes),
                data: { allowedRoles: ['User', 'Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'activities',
                loadChildren: () =>
                    import('./views/activities/routes').then((m) => m.routes),
                data: { allowedRoles: ['User', 'Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'notifications',
                loadChildren: () =>
                    import('./views/notifications/routes').then(
                        (m) => m.routes,
                    ),
                data: { allowedRoles: ['User', 'Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'graphicusers',
                loadChildren: () =>
                    import('./views/graphicusers/routes').then((m) => m.routes),
                data: { allowedRoles: ['Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'graphiccompanies',
                loadChildren: () =>
                    import('./views/graphiccompanies/routes').then(
                        (m) => m.routes,
                    ),
                data: { allowedRoles: ['Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'graphicactivities',
                loadChildren: () =>
                    import('./views/graphicactivities/routes').then(
                        (m) => m.routes,
                    ),
                data: { allowedRoles: ['Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'profile',
                loadChildren: () =>
                    import('./views/profile/routes').then((m) => m.routes),
                data: { allowedRoles: ['User', 'Company'] },
                canActivate: [AuthenticationService],
            },
            {
                path: 'transactions',
                loadChildren: () =>
                    import('./views/transactions/routes').then((m) => m.routes),
                data: { allowedRoles: ['User', 'Company'] },
                canActivate: [AuthenticationService],
            },
        ],
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./views/pages/login/login.component').then(
                (m) => m.LoginComponent,
            ),
        data: {
            title: 'Inicio de sesión',
        },
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./views/pages/register/register.component').then(
                (m) => m.RegisterComponent,
            ),
        data: {
            title: 'Registrarse',
        },
    },
    {
        path: 'forgotpassword',
        loadComponent: () =>
            import(
                './views/pages/forgotpassword/forgotpassword.component'
            ).then((m) => m.ForgotPasswordComponent),
        data: {
            title: 'Olvidé la contraseña',
        },
    },
    {
        path: '400',
        loadComponent: () =>
            import('./views/pages/page400/page400.component').then(
                (m) => m.Page400Component,
            ),
        data: {
            title: 'Error 400',
        },
    },
    { path: '**', redirectTo: 'login' },
];
