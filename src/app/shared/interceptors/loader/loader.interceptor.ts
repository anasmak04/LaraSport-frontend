import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderServiceService } from 'src/app/services/loader/loader-service.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

   loaderservice = inject(LoaderServiceService);


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       this.loaderservice.isLoading.next(true);
        return next.handle(request).pipe(
          finalize(() => {
            this.loaderservice.isLoading.next(false);
          })
        )
      }
}
