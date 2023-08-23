import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductSetupDetailsComponent } from './conduct-setup-details.component';

describe('ConductSetupDetailsComponent', () => {
  let component: ConductSetupDetailsComponent;
  let fixture: ComponentFixture<ConductSetupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductSetupDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductSetupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
