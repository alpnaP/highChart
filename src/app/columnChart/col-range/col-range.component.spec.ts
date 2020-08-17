import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColRangeComponent } from './col-range.component';

describe('ColRangeComponent', () => {
  let component: ColRangeComponent;
  let fixture: ComponentFixture<ColRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
