import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoEnquiriesDetailsComponent } from './enquiries-details.component';

describe('EnquiriesDetailsComponent', () => {
  let component: CeoEnquiriesDetailsComponent;
  let fixture: ComponentFixture<CeoEnquiriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoEnquiriesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoEnquiriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
