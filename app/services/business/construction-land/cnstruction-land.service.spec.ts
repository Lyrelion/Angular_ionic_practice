import { TestBed } from '@angular/core/testing';

import { CnstructionLandService } from './cnstruction-land.service';

describe('CnstructionLandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CnstructionLandService = TestBed.get(CnstructionLandService);
    expect(service).toBeTruthy();
  });
});
