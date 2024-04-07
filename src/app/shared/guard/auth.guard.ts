import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthServiceService } from "src/app/services/auth/auth-service.service";

export const AuthGuard = () => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);
  const isLoggedIn = authService.getToken() !== null;
  
  const roles = JSON.parse(localStorage.getItem("roles") || "[]");

  if (isLoggedIn && roles.includes("Admin")) {
    return true;
  }

  router.navigate(["/access-denied"]);
  return false;
};
