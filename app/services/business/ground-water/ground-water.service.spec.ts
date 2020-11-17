import { TestBed } from '@angular/core/testing';

import { GroundWaterService } from './ground-water.service';

describe('GroundWaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroundWaterService = TestBed.get(GroundWaterService);
    expect(service).toBeTruthy();
  });
});
