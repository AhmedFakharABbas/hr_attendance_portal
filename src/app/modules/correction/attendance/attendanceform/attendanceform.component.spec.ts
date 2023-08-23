import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceformComponent } from './attendanceform.component';

describe('AttendanceformComponent', () => {
  let component: AttendanceformComponent;
  let fixture: ComponentFixture<AttendanceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
