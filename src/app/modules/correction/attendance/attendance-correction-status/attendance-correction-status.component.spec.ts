import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCorrectionStatusComponent } from './attendance-correction-status.component';

describe('AttendanceCorrectionStatusComponent', () => {
  let component: AttendanceCorrectionStatusComponent;
  let fixture: ComponentFixture<AttendanceCorrectionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceCorrectionStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceCorrectionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
