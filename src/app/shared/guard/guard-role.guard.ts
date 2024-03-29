import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthServiceService } from "src/app/services/Authservice/auth-service.service";

export const guardRoleGuard = () => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);
  const isLoggedIn = authService.getToken() !== null;

  if (isLoggedIn) {
    return true;
  }

  router.navigate(["/access-denied"]);
  return false;
};
