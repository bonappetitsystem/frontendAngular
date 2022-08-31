import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardCozinheiroService implements CanActivate{

  constructor(private router: Router, private service: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot) {

    if(this.service.getDadosToken().perfil == 'COZINHA' || this.service.getDadosToken().perfil == 'GERENCIA'){
      return true
  }
  return false
  }
}


