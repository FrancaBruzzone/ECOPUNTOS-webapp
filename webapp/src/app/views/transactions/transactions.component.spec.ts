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
import { TransactionsComponent } from './transactions.component';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
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
        TransactionsComponent,
      ],
      providers: [IconSetService],
    }).compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
