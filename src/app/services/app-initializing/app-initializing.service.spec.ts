import { TestBed } from '@angular/core/testing';

import { AppInitializingService } from './app-initializing.service';

describe('AppInitializingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppInitializingService = TestBed.get(AppInitializingService);
    expect(service).toBeTruthy();
  });
});
