import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartLegendsComponent } from './pie-chart-legends.component';

describe('PieChartLegendsComponent', () => {
  let component: PieChartLegendsComponent;
  let fixture: ComponentFixture<PieChartLegendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartLegendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartLegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
