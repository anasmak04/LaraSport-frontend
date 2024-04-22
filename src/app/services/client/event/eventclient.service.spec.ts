import { TestBed } from '@angular/core/testing';

import { EventclientService } from './eventclient.service';

describe('EventclientService', () => {
  let service: EventclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
