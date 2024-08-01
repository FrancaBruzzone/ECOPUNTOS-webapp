import { Component } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import {
    ContainerComponent,
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    ButtonDirective,
} from '@coreui/angular';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [
        ContainerComponent,
        RowComponent,
        ColComponent,
        TextColorDirective,
        CardComponent,
        CardBodyComponent,
        FormDirective,
        InputGroupComponent,
        InputGroupTextDirective,
        IconDirective,
        FormControlDirective,
        ButtonDirective,
        FormsModule,
        CommonModule,
    ],
})
export class RegisterComponent {
    email: string = '';
    password: string = '';
    repetedPassword: string = '';
    errorMessage: string | null = null;

    constructor(
        private router: Router,
        private registerService: RegisterService,
    ) {}

    register(): void {
        if (this.password == this.repetedPassword) {
            this.registerService.register(this.email, this.password).subscribe(
                (response) => {
                    this.router.navigate(['/login']);
                },
                (error) => {
                    this.errorMessage =
                        error.error.message ||
                        'Error al registrarse intente más tarde';
                },
            );
        } else {
            this.errorMessage = 'La contraseña y su repetición no coinciden';
        }
    }

    clearErrorMessage() {
        this.errorMessage = null;
    }
}
