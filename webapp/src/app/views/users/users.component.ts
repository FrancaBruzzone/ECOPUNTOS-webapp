import { DOCUMENT, NgStyle } from '@angular/common';
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
    ProgressBarDirective,
    ProgressComponent,
    RowComponent,
    TableDirective,
    TextColorDirective,
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';

interface IUsers {
    name: string;
    state: string;
    registered: string;
    usage: number;
    activity: string;
    avatar: string;
    status: string;
    color: string;
}

interface IInvestment {
    code: string;
    date: string;
    amount: number;
}
interface IUser {
    mail: string;
    name: string;
}

@Component({
    templateUrl: 'users.component.html',
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
        ModalBodyComponent,
        ModalHeaderComponent,
        ModalComponent,
        ModalFooterComponent,
        FormsModule,
    ],
})
export class UsersComponent {
    readonly #destroyRef: DestroyRef = inject(DestroyRef);
    readonly #document: Document = inject(DOCUMENT);
    readonly #renderer: Renderer2 = inject(Renderer2);
    public visible = false;

    public users: IUsers[] = [
        {
            name: 'Franca Bruzzone',
            state: 'Nuevo',
            registered: '2024-01-01',
            usage: 50,
            activity: '2024-07-05 10:00',
            avatar: './assets/images/avatars/1.jpg',
            status: 'success',
            color: 'success',
        },
        {
            name: 'Germán Gil',
            state: 'Activo',
            registered: '2024-01-01',
            usage: 10,
            activity: '2024-07-05 10:30',
            avatar: './assets/images/avatars/2.jpg',
            status: 'danger',
            color: 'info',
        },
        {
            name: 'Mariel Feder',
            state: 'No activo',
            registered: '2024-07-05 10:00',
            usage: 98,
            activity: '2024-06-01 09:14',
            avatar: './assets/images/avatars/4.jpg',
            status: 'secondary',
            color: 'danger',
        },
    ];

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

    newUser = {
        mail: '',
        name: '',
    };

    toggleLiveDemo() {
        this.visible = !this.visible;
    }

    handleLiveDemoChange(event: any) {
        this.visible = event;
    }

    saveNewUser() {
        console.log('Guardar nueva inversión:', this.newUser);
        this.newUser = {
            mail: '',
            name: '',
        };
        this.toggleLiveDemo();
    }
}
