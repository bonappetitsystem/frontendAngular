import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardCozinheiroService implements CanActivate{

  constructor(private router: Router, private service: UsuariosService) { }
  canActivate(route: ActivatedRouteSnapshot) {

    if(this.service.getDadosToken().perfil == 'cozinheiro' || this.service.getDadosToken().perfil == 'gerente'){
      return true
  }
  return false
  }
}


