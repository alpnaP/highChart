import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicColumnChartComponent } from './basic-column-chart.component';

describe('BasicColumnChartComponent', () => {
  let component: BasicColumnChartComponent;
  let fixture: ComponentFixture<BasicColumnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicColumnChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
