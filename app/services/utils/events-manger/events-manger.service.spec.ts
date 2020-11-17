import { TestBed } from '@angular/core/testing';

import { EventsMangerService } from './events-manger.service';

describe('EventsMangerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsMangerService = TestBed.get(EventsMangerService);
    expect(service).toBeTruthy();
  });
});
