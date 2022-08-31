import { UsuariosService } from './usuarios.service';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardVendedorService implements CanActivate {

  constructor( private router: Router, private service: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot) {
    if(this.service.getDadosToken().perfil == 'VENDA' || this.service.getDadosToken().perfil == 'gerente'){
      return true
  }
  return false
}
}