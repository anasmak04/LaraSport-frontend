import { TestBed } from '@angular/core/testing';

import { ClubFacadeService } from './club-facade.service';

describe('ClubFacadeService', () => {
  let service: ClubFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
