import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardRoleGuard } from './guard-role.guard';

describe('guardRoleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
