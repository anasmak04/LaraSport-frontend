import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isBannedGuard: CanActivateFn = (route, state) => {

  const isBanned = JSON.parse(localStorage.getItem('is_banned') || 'false'); 

   const router = inject(Router);

  if (isBanned) {
    router.navigate(["access-denied"]);
    return false;
  }

  return true;
};
