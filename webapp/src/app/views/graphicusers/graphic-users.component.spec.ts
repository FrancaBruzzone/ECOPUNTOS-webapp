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
import { GraphicUsersComponent } from './graphic-users.component';

describe('GraphicUsersComponent', () => {
  let component: GraphicUsersComponent;
  let fixture: ComponentFixture<GraphicUsersComponent>;
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
        GraphicUsersComponent,
      ],
      providers: [IconSetService],
    }).compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(GraphicUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
