import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  ButtonModule,
  CardModule,
  GridModule,
  ListGroupModule,
  NavModule,
  UtilitiesModule,
} from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../icons/icon-subset';
import { GraphicActivitiesComponent } from './graphic-activities.component';

describe('GraphicActivitiesComponent', () => {
  let component: GraphicActivitiesComponent;
  let fixture: ComponentFixture<GraphicActivitiesComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardModule,
        NavModule,
        GridModule,
        ListGroupModule,
        UtilitiesModule,
        ButtonModule,
        RouterTestingModule,
        GraphicActivitiesComponent,
      ],
      providers: [IconSetService],
    }).compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(GraphicActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
