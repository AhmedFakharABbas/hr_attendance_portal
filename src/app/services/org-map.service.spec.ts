import { TestBed } from '@angular/core/testing';

import { OrgMapService } from './org-map.service';

describe('OrgMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgMapService = TestBed.get(OrgMapService);
    expect(service).toBeTruthy();
  });
});
