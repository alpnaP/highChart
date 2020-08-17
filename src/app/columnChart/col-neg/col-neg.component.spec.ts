import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColNegComponent } from './col-neg.component';

describe('ColNegComponent', () => {
  let component: ColNegComponent;
  let fixture: ComponentFixture<ColNegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColNegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColNegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
