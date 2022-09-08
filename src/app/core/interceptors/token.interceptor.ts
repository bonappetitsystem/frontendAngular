import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {  Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const accessToken = localStorage.getItem("token");
      
      if(request.url.includes('oauth/token')){
        return next.handle(request);
        }

      if (accessToken) {
          const cloned = request.clone({
              headers: request.headers.set("Authorization",
                  "Bearer " + accessToken)
          });

          console.log('Token added to HTTP request');

          return next.handle(cloned);
      }
else {
    console.log('No token added to HTTP request');
    return next.handle(request);
}
}

}

