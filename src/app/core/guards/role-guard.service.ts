import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate{

  constructor(public auth:AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data['expectedRole'];
  
    const tokenPayload:any = this.auth.dataToken();
    if(!this.auth.isAuthenticated() || tokenPayload.perfil !== expectedRole){
      // Permitir dois perfis para a mesma rota
      if(Array.isArray(expectedRole)){
        if(!expectedRole.includes(tokenPayload.perfil)){
          this.router.navigate(['login']);
          return false;
        }
      }else{
        this.router.navigate(['login']);
        return false;
      }


    }
      
    return true;
  }
}
