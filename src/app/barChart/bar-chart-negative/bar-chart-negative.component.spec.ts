import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartNegativeComponent } from './bar-chart-negative.component';

describe('BarChartNegativeComponent', () => {
  let component: BarChartNegativeComponent;
  let fixture: ComponentFixture<BarChartNegativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartNegativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartNegativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
