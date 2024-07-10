import { DOCUMENT, NgStyle } from '@angular/common';
import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  Renderer2,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChartOptions } from 'chart.js';
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

import { WidgetsBrandComponent } from '../widgets/widgets-brand/widgets-brand.component';
import { WidgetsDropdownComponent } from '../widgets/widgets-dropdown/widgets-dropdown.component';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

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
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  standalone: true,
  imports: [
    WidgetsDropdownComponent,
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
    WidgetsBrandComponent,
    CardHeaderComponent,
    TableDirective,
    AvatarComponent,
  ],
})
export class DashboardComponent implements OnInit {
  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  readonly #document: Document = inject(DOCUMENT);
  readonly #renderer: Renderer2 = inject(Renderer2);
  readonly #chartsData: DashboardChartsData = inject(DashboardChartsData);

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

  public mainChart: IChartProps = { type: 'line' };
  public mainChartRef: WritableSignal<any> = signal(undefined);
  #mainChartRefEffect = effect(() => {
    if (this.mainChartRef()) {
      this.setChartStyles();
    }
  });
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new FormGroup({
    trafficRadio: new FormControl('Month'),
  });

  ngOnInit(): void {
    this.initCharts();
    this.updateChartOnColorModeChange();
  }

  initCharts(): void {
    this.mainChart = this.#chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.#chartsData.initMainChart(value);
    this.initCharts();
  }

  handleChartRef($chartRef: any) {
    if ($chartRef) {
      this.mainChartRef.set($chartRef);
    }
  }

  updateChartOnColorModeChange() {
    const unListen = this.#renderer.listen(
      this.#document.documentElement,
      'ColorSchemeChange',
      () => {
        this.setChartStyles();
      },
    );

    this.#destroyRef.onDestroy(() => {
      unListen();
    });
  }

  setChartStyles() {
    if (this.mainChartRef()) {
      setTimeout(() => {
        const options: ChartOptions = { ...this.mainChart.options };
        const scales = this.#chartsData.getScales();
        this.mainChartRef().options.scales = { ...options.scales, ...scales };
        this.mainChartRef().update();
      });
    }
  }
}
