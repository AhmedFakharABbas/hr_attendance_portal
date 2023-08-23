import { TestBed } from '@angular/core/testing';

import { FilterDataEmitterService } from './filter-data-emitter.service';

describe('FilterDataEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterDataEmitterService = TestBed.get(FilterDataEmitterService);
    expect(service).toBeTruthy();
  });
});
