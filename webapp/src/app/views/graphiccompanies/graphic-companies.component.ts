import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import {
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    BadgeComponent,
    ButtonDirective,
    BorderDirective,
} from '@coreui/angular';

@Component({
    selector: 'app-graphic-companies',
    templateUrl: './graphic-companies.component.html',
    standalone: true,
    imports: [
        RowComponent,
        ColComponent,
        TextColorDirective,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        DocsExampleComponent,
        BadgeComponent,
        ButtonDirective,
        BorderDirective,
    ],
})
export class GraphicCompaniesComponent {
    constructor() {}
}
