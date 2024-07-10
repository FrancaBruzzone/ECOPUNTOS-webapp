import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import {
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
} from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../icons/icon-subset';
import { ActivitiesComponent } from './activities.component';

describe('ActivitiesComponent', () => {
    let component: ActivitiesComponent;
    let fixture: ComponentFixture<ActivitiesComponent>;
    let iconSetService: IconSetService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CardModule,
                GridModule,
                FormsModule,
                FormModule,
                ButtonModule,
                RouterTestingModule,
                ActivitiesComponent,
            ],
            providers: [IconSetService],
        }).compileComponents();
    });

    beforeEach(() => {
        iconSetService = TestBed.inject(IconSetService);
        iconSetService.icons = { ...iconSubset };

        fixture = TestBed.createComponent(ActivitiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
