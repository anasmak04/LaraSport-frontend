import { TestBed } from '@angular/core/testing';

import { PostclientService } from './postclient.service';

describe('PostclientService', () => {
  let service: PostclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
