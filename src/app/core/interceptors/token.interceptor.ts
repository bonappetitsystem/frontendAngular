import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {  Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private service:AuthService) {}

 //Intecpt the request and add the token to the header
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const accessToken = localStorage.getItem("token");
      
      if(request.url.includes('oauth/token')){
        return next.handle(request);
        }

//Check if accesToken exists, else send request without bearer token
      if (accessToken) {
          const cloned = request.clone({
              headers: request.headers.set("Authorization",
                  "Bearer " + accessToken)
          });

          console.log('Token added to HTTP request');

          return next.handle(cloned);
      }
else {
    //No token; proceed request without bearer token
    console.log('No token added to HTTP request');
    return next.handle(request);
}
}

}

