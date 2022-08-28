import { UsuariosService } from './usuarios.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardVendedorService implements CanActivate {

  constructor( private router: Router, private service: UsuariosService) { }
  canActivate(route: ActivatedRouteSnapshot) {
    if(this.service.getDadosToken().perfil == 'vendedor' || this.service.getDadosToken().perfil == 'gerente'){
      return true
  }
  return false
}
}