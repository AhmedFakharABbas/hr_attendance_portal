import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiriesDetailsComponent } from './enquiries-details.component';

describe('EnquiriesDetailsComponent', () => {
  let component: EnquiriesDetailsComponent;
  let fixture: ComponentFixture<EnquiriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiriesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
