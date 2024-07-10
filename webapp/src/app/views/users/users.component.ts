import { DOCUMENT, NgStyle } from '@angular/common';
import {
    Component,
    DestroyRef,
    inject,
    OnInit,
    Renderer2,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
    ProgressBarDirective,
    ProgressComponent,
    RowComponent,
    TableDirective,
    TextColorDirective,
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';

interface IUser {
    name: string;
    state: string;
    registered: string;
    usage: number;
    activity: string;
    avatar: string;
    status: string;
    color: string;
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
    ],
})
export class UsersComponent {
    readonly #destroyRef: DestroyRef = inject(DestroyRef);
    readonly #document: Document = inject(DOCUMENT);
    readonly #renderer: Renderer2 = inject(Renderer2);

    public users: IUser[] = [
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
}
