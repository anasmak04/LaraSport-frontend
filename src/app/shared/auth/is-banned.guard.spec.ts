import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isBannedGuard } from './is-banned.guard';

describe('isBannedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isBannedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
