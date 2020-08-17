import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColStackPercentComponent } from './col-stack-percent.component';

describe('ColStackPercentComponent', () => {
  let component: ColStackPercentComponent;
  let fixture: ComponentFixture<ColStackPercentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColStackPercentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColStackPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
