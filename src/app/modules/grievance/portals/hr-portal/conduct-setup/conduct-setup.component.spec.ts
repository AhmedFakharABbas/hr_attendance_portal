import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductSetupComponent } from './conduct-setup.component';

describe('ConductSetupComponent', () => {
  let component: ConductSetupComponent;
  let fixture: ComponentFixture<ConductSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
