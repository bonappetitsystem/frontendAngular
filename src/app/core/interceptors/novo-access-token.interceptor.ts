import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { from, mergeMap, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable()
export class NovoAccessTokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!request.url.includes('oauth/token') && this.auth.isAccessTokenInvalid()){
      return from(this.auth.getNewAccessToken()).pipe(
        mergeMap(() => {
          if(this.auth.isAccessTokenInvalid()){
            throw new Error('Não foi possível renovar o token');
          }
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          return next.handle(request)
        })
      )
    }
    
      return next.handle(request)
    
  }
}
  

