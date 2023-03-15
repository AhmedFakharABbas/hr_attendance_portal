import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceFormComponent } from './grievance-form.component';

describe('GrievanceFormComponent', () => {
  let component: GrievanceFormComponent;
  let fixture: ComponentFixture<GrievanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrievanceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
