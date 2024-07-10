import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonModule, CardModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../icons/icon-subset';
import { OffersComponent } from './offers.component';

describe('OffersComponent', () => {
  let component: OffersComponent;
  let fixture: ComponentFixture<OffersComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardModule,
        GridModule,
        ButtonModule,
        RouterTestingModule,
        IconModule,
        OffersComponent,
      ],
      providers: [IconSetService],
    }).compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(OffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
