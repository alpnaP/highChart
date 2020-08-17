import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedAxesComponent } from './inverted-axes.component';

describe('InvertedAxesComponent', () => {
  let component: InvertedAxesComponent;
  let fixture: ComponentFixture<InvertedAxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvertedAxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertedAxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
