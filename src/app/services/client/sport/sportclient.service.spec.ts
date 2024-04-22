import { TestBed } from '@angular/core/testing';

import { SportclientService } from './sportclient.service';

describe('SportclientService', () => {
  let service: SportclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
