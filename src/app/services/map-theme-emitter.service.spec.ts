import { TestBed } from '@angular/core/testing';

import { MapThemeEmitterService } from './map-theme-emitter.service';

describe('MapThemeEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapThemeEmitterService = TestBed.get(MapThemeEmitterService);
    expect(service).toBeTruthy();
  });
});
