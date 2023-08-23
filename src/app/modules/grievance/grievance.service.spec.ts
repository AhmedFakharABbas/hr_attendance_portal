import { TestBed } from '@angular/core/testing';

import { GrievanceService } from './grievance.service';

describe('GrievanceService', () => {
  let service: GrievanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrievanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
