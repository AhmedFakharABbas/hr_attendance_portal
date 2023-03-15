import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmPortalComponent } from './lm-portal.component';

describe('LmPortalComponent', () => {
  let component: LmPortalComponent;
  let fixture: ComponentFixture<LmPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
