import { TestBed } from '@angular/core/testing';

import { AgriculturalLandService } from './agricultural-land.service';

describe('AgriculturalLandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgriculturalLandService = TestBed.get(AgriculturalLandService);
    expect(service).toBeTruthy();
  });
});
