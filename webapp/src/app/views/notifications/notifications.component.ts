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
  selector: 'app-badges',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
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
export class NotificationsComponent {
  constructor() {}
}
