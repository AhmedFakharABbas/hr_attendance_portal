import { TestBed } from '@angular/core/testing';

import { OrgFiltersService } from './org-filters.service';

describe('OrgFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgFiltersService = TestBed.get(OrgFiltersService);
    expect(service).toBeTruthy();
  });
});
