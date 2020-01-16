import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEnrollmentComponent } from './output-enrollment.component';

describe('OutputEnrollmentComponent', () => {
  let component: OutputEnrollmentComponent;
  let fixture: ComponentFixture<OutputEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
