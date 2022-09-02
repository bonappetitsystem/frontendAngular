import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsuariosService } from '../usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardAdminService implements CanActivate{

  constructor(private router: Router, private service: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot) {

    if(this.service.getDadosToken().perfil == 'ADMIN'){
      return true
  }
  return false
  }
}
