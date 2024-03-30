import { TestBed } from '@angular/core/testing';

import { EventFacadeService } from './event-facade.service';

describe('EventFacadeService', () => {
  let service: EventFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
