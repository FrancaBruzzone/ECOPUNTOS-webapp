import { Component } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-page400',
  templateUrl: './page400.component.html',
  styleUrls: ['./page400.component.scss'],
  standalone: true,
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
  ],
})
export class Page400Component {
  constructor() {}
}
