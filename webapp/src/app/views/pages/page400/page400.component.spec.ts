import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { Page400Component } from './page400.component';

describe('Page400Component', () => {
  let component: Page400Component;
  let fixture: ComponentFixture<Page400Component>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormModule,
        GridModule,
        ButtonModule,
        IconModule,
        Page400Component,
      ],
      providers: [IconSetService],
    }).compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(Page400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
