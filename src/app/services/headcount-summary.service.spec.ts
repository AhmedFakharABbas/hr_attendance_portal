import { TestBed } from '@angular/core/testing';

import { HeadcountSummaryService } from './headcount-summary.service';

describe('HeadcountSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeadcountSummaryService = TestBed.get(HeadcountSummaryService);
    expect(service).toBeTruthy();
  });
});
