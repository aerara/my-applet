import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEnrollmentComponent } from './input-enrollment.component';

describe('InputEnrollmentComponent', () => {
  let component: InputEnrollmentComponent;
  let fixture: ComponentFixture<InputEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
