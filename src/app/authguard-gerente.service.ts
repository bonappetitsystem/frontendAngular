import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGerenteService implements CanActivate{

  constructor( private router: Router, private service: UsuariosService) { }
  canActivate(route: ActivatedRouteSnapshot) {

    if(this.service.getDadosToken().perfil == 'gerente' && localStorage.getItem('token') != null){
      return true
  }
  return false
}
}


