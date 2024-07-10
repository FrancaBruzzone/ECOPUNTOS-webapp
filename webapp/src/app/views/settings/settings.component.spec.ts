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
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
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
        SettingsComponent,
      ],
      providers: [IconSetService],
    }).compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
