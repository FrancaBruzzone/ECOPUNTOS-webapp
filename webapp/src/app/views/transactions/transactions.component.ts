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
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
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
export class TransactionsComponent {
  constructor() {}
}
