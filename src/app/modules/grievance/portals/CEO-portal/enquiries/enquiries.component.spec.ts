import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoEnquiriesComponent } from './enquiries.component';

describe('EnquiriesComponent', () => {
  let component: CeoEnquiriesComponent;
  let fixture: ComponentFixture<CeoEnquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoEnquiriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
