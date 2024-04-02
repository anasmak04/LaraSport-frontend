import { TestBed } from '@angular/core/testing';

import { ClubmanagerService } from './clubmanager.service';

describe('ClubmanagerService', () => {
  let service: ClubmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
