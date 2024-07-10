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
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-graphic-activities',
  templateUrl: './graphic-activities.component.html',
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
    ChartjsComponent,
  ],
})
export class GraphicActivitiesComponent {
  options = {
    maintainAspectRatio: false,
  };

  chartPieData: ChartData = {
    labels: ['Transporte sostenible', 'Reciclaje'],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ['#FFCE56', '#36A2EB'],
        hoverBackgroundColor: ['#FFCE56', '#36A2EB'],
      },
    ],
  };
}
