import { TestBed } from '@angular/core/testing';

import { ClubTagsService } from './club-tags.service';

describe('ClubTagsService', () => {
  let service: ClubTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
