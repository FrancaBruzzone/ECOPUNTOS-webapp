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
import { CompaniesService } from './companies.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss'],
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
export class CompaniesComponent {
    name: string = '';
    errorMessage: string | null = null;

    constructor(
        private router: Router,
        private companiesService: CompaniesService,
    ) {}

    create(): void {
        console.log(this.name);
        this.companiesService.create(this.name).subscribe(
            (response) => {
                this.router.navigate(['/dashboard']);
            },
            (error) => {
                this.errorMessage =
                    error.error.message ||
                    'Error al registrar la empresa intente más tarde';
            },
        );
    }

    clearErrorMessage() {
        this.errorMessage = null;
    }
}
