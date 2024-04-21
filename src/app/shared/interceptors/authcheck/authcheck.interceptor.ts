import { Injectable, inject } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertService } from "../../../services/alert/alert.service";

@Injectable()
export class AuthCheck implements HttpInterceptor {
  constructor(
    private router : Router ,
    private sweet : AlertService
  ) {}




  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.sweet.showError("You need to login first", "Error: You are not logged in");
          this.router.navigate(['/login']);
        }
        return throwError(() => new Error('Unauthorized'));
      })
  )}
}
