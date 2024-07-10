import { Component } from '@angular/core';
import { cilArrowRight, cilChartPie } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
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
  TemplateIdDirective,
  TextColorDirective,
  WidgetStatFComponent,
} from '@coreui/angular';
import { WidgetsDropdownComponent } from '../widgets/widgets-dropdown/widgets-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { NgStyle } from '@angular/common';
import { WidgetsBrandComponent } from '../widgets/widgets-brand/widgets-brand.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
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
    RowComponent,
    ColComponent,
    WidgetStatFComponent,
    TemplateIdDirective,
    IconDirective,
  ],
})
export class OffersComponent {
  constructor(private router: Router) {}

  icons = { cilChartPie, cilArrowRight };

  navigateToProduct() {
    this.router.navigateByUrl('/product');
  }
}
