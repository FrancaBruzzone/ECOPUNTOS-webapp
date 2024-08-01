import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

import {
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    ButtonDirective,
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
        ContainerComponent,
        RowComponent,
        ColComponent,
        CardGroupComponent,
        TextColorDirective,
        CardComponent,
        CardBodyComponent,
        FormDirective,
        InputGroupComponent,
        InputGroupTextDirective,
        IconDirective,
        FormControlDirective,
        ButtonDirective,
        NgStyle,
        FormsModule,
        CommonModule,
    ],
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    errorMessage: string | null = null;

    constructor(
        private router: Router,
        private loginService: LoginService,
    ) {}

    navigateToRegister() {
        this.router.navigateByUrl('/register');
    }

    navigateToDashboard() {
        this.router.navigateByUrl('/dashboard');
    }

    navigateToForgotPassword() {
        this.router.navigateByUrl('/forgotpassword');
    }

    login(): void {
        this.loginService.login(this.email, this.password).subscribe(
            (response) => {
                this.router.navigate(['/dashboard']);
            },
            (error) => {
                this.errorMessage =
                    error.error.message ||
                    'Error al iniciar sesión intente más tarde';
            },
        );
    }

    clearErrorMessage() {
        this.errorMessage = null;
    }
}
