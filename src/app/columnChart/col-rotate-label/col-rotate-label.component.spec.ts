import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColRotateLabelComponent } from './col-rotate-label.component';

describe('ColRotateLabelComponent', () => {
  let component: ColRotateLabelComponent;
  let fixture: ComponentFixture<ColRotateLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColRotateLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColRotateLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
