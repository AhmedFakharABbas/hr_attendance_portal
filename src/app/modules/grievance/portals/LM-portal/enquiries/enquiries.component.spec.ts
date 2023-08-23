import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmEnquiriesComponent } from './enquiries.component';

describe('EnquiriesComponent', () => {
  let component: LmEnquiriesComponent;
  let fixture: ComponentFixture<LmEnquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmEnquiriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
