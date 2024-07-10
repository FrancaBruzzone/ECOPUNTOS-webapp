import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import {
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  ButtonDirective,
  ButtonGroupComponent,
  FormCheckLabelDirective,
  CardFooterComponent,
  GutterDirective,
  ProgressBarDirective,
  ProgressComponent,
  TableDirective,
  ModalFooterComponent,
  ModalBodyComponent,
  ButtonCloseDirective,
  ThemeDirective,
  ModalTitleDirective,
  ModalHeaderComponent,
  ModalComponent,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';

interface IActivity {
  completedDate: string;
  user: string;
  type: string;
  points: number;
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    DocsExampleComponent,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    ButtonDirective,
    NgStyle,
    IconDirective,
    ButtonGroupComponent,
    FormCheckLabelDirective,
    ChartjsComponent,
    CardFooterComponent,
    GutterDirective,
    ProgressBarDirective,
    ProgressComponent,
    TableDirective,
    CommonModule,
    FormsModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ThemeDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent,
  ],
})
export class ActivitiesComponent {
  public visible = false;
  public favoriteColor = '#26ab3c';

  constructor() {}

  public activities: IActivity[] = [
    {
      completedDate: '2024-01-01',
      user: 'Germán Gil',
      type: 'Transporte sostenible',
      points: 1000,
    },
    {
      completedDate: '2024-01-01',
      user: 'Franca Bruzzone',
      type: 'Transporte sostenible',
      points: 400,
    },
    {
      completedDate: '2024-01-01',
      user: 'Germán Gil',
      type: 'Reciclaje',
      points: 560,
    },
  ];

  newActivity = {
    date: '',
    user: '',
    type: '',
    points: 0,
    file: null,
  };

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  saveNewActivity() {
    console.log('Registrar nueva actividad:', this.newActivity);
    this.newActivity = {
      date: '',
      user: '',
      type: '',
      points: 0,
      file: null,
    };
    this.toggleLiveDemo();
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.newActivity.file = file;
  }
}
