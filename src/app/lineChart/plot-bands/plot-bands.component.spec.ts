import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotBandsComponent } from './plot-bands.component';

describe('PlotBandsComponent', () => {
  let component: PlotBandsComponent;
  let fixture: ComponentFixture<PlotBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
