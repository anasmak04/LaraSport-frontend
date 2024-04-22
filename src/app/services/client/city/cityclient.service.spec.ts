import { TestBed } from '@angular/core/testing';

import { CityclientService } from './cityclient.service';

describe('CityclientService', () => {
  let service: CityclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
