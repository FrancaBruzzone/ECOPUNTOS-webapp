import { CommonModule, DOCUMENT, NgStyle } from '@angular/common';
import {
    Component,
    DestroyRef,
    inject,
    OnInit,
    Renderer2,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    AvatarComponent,
    ButtonCloseDirective,
    ButtonDirective,
    ButtonGroupComponent,
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    CardHeaderComponent,
    ColComponent,
    FormCheckLabelDirective,
    GutterDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ProgressBarDirective,
    ProgressComponent,
    RowComponent,
    TableDirective,
    TextColorDirective,
    ThemeDirective,
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';

interface IInvestment {
    code: string;
    date: string;
    amount: number;
}

@Component({
    templateUrl: 'investments.component.html',
    standalone: true,
    imports: [
        TextColorDirective,
        CardComponent,
        CardBodyComponent,
        RowComponent,
        ColComponent,
        ButtonDirective,
        IconDirective,
        ReactiveFormsModule,
        ButtonGroupComponent,
        FormCheckLabelDirective,
        ChartjsComponent,
        NgStyle,
        CardFooterComponent,
        GutterDirective,
        ProgressBarDirective,
        ProgressComponent,
        CardHeaderComponent,
        TableDirective,
        AvatarComponent,
        CommonModule,
        ModalComponent,
        ModalHeaderComponent,
        ModalTitleDirective,
        ThemeDirective,
        ButtonCloseDirective,
        ModalBodyComponent,
        ModalFooterComponent,
        FormsModule,
    ],
})
export class InvestmentsComponent {
    public visible = false;

    readonly #destroyRef: DestroyRef = inject(DestroyRef);
    readonly #document: Document = inject(DOCUMENT);
    readonly #renderer: Renderer2 = inject(Renderer2);

    public investments: IInvestment[] = [
        {
            code: 'F2377',
            date: '2024-01-01',
            amount: 1000,
        },
        {
            code: 'F2341',
            date: '2024-03-01',
            amount: 2000,
        },
        {
            code: 'F2340',
            date: '2024-04-01',
            amount: 4300,
        },
    ];

    newInvestment = {
        date: '',
        code: '',
        amount: 0,
        file: null,
    };

    toggleLiveDemo() {
        this.visible = !this.visible;
    }

    handleLiveDemoChange(event: any) {
        this.visible = event;
    }

    saveNewInvestment() {
        console.log('Guardar nueva inversión:', this.newInvestment);
        this.newInvestment = {
            date: '',
            code: '',
            amount: 0,
            file: null,
        };
        this.toggleLiveDemo();
    }

    handleFileInput(event: any) {
        const file = event.target.files[0];
        this.newInvestment.file = file;
    }
}
