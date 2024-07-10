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
  selector: 'app-graphic-users',
  templateUrl: './graphic-users.component.html',
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
export class GraphicUsersComponent {
  constructor() {}
}
