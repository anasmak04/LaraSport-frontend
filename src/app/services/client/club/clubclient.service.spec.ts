import { TestBed } from '@angular/core/testing';

import { ClubclientService } from './clubclient.service';

describe('ClubclientService', () => {
  let service: ClubclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
