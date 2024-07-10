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
  ],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  isPersonalUser: boolean = false;

  constructor(
    private router: Router,
    private registerService: RegisterService,
  ) {}

  register(): void {
    this.registerService
      .register(this.email, this.password, this.isPersonalUser)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

  togglePersonalAccount(event: any) {
    this.isPersonalUser = event.target.checked;
  }
}
