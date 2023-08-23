import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmEnquiriesDetailsComponent } from './enquiries-details.component';

describe('EnquiriesDetailsComponent', () => {
  let component: LmEnquiriesDetailsComponent;
  let fixture: ComponentFixture<LmEnquiriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmEnquiriesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmEnquiriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
