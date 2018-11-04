import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityPanelComponent } from './humidity-panel.component';

describe('HumidityPanelComponent', () => {
    let component: HumidityPanelComponent;
    let fixture: ComponentFixture<HumidityPanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HumidityPanelComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HumidityPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
