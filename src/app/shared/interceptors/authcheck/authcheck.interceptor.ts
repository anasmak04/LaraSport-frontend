// import { Injectable, inject } from "@angular/core";
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpErrorResponse,
// } from "@angular/common/http";
// import { Observable, catchError, throwError } from "rxjs";
// import { ActivatedRoute, Router } from "@angular/router";
// import { AlertService } from "../../../services/alert/alert.service";
// import { AuthServiceService } from "src/app/services/auth/auth-service.service";

// @Injectable()
// export class AuthCheck implements HttpInterceptor {
//   constructor(
//     private router : Router ,
//     private sweet : AlertService,
//     private authservice : AuthServiceService
//   ) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if (!this.authservice.getToken()) {
//       this.sweet.showError("You need to login first", "Error: You are not logged in");
//       this.router.navigate(['/login']);
//       return throwError(() => new Error('No token found - user not logged in'));
//     }
//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error.status === 401) {
//           // Possibly handle token refresh here if applicable
//           this.sweet.showError("Session expired, please login again", "Session Expired");
//           this.router.navigate(['/login']);
//         }
//         return throwError(() => new Error('Unauthorized'));
//       })
//     );
//   }
  
  

// }
