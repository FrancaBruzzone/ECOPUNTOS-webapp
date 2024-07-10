import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  BadgeModule,
  ButtonModule,
  CardModule,
  GridModule,
  UtilitiesModule,
} from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../icons/icon-subset';
import { NotificationsComponent } from './notifications.component';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BadgeModule,
        CardModule,
        GridModule,
        UtilitiesModule,
        ButtonModule,
        RouterTestingModule,
        NotificationsComponent,
      ],
      providers: [IconSetService],
    }).compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
