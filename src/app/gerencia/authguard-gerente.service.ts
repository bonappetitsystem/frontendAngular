import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsuariosService } from '../usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGerenteService implements CanActivate{

  constructor( private router: Router, private service: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot) {

    if(this.service.getDadosToken().perfil == 'GERENCIA' && localStorage.getItem('token') != null){
      return true
  }
  return false
}
}


