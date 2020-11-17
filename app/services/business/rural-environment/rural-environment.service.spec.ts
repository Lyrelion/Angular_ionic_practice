import { TestBed } from '@angular/core/testing';

import { RuralEnvironmentService } from './rural-environment.service';

describe('RuralEnvironmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuralEnvironmentService = TestBed.get(RuralEnvironmentService);
    expect(service).toBeTruthy();
  });
});
