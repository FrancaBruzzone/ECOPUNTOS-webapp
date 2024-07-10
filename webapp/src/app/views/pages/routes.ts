import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./login/login.component').then((m) => m.LoginComponent),
        data: {
            title: 'Iniciar sesión',
        },
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./register/register.component').then(
                (m) => m.RegisterComponent,
            ),
        data: {
            title: 'Registrarse',
        },
    },
    {
        path: 'forgotpassword',
        loadComponent: () =>
            import('./forgotpassword/forgotpassword.component').then(
                (m) => m.ForgotPasswordComponent,
            ),
        data: {
            title: 'Olvidé la contraseña',
        },
    },
    {
        path: '400',
        loadComponent: () =>
            import('./page400/page400.component').then(
                (m) => m.Page400Component,
            ),
        data: {
            title: 'Error 400',
        },
    },
];
