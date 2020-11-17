import { TestBed } from '@angular/core/testing';

import { KeyIndustryService } from './key-industry.service';

describe('KeyIndustryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyIndustryService = TestBed.get(KeyIndustryService);
    expect(service).toBeTruthy();
  });
});
