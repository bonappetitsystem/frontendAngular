import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

declare const M: any;

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  idusuario: number = 0
  usuario: any = {}

  constructor(private route: ActivatedRoute, private service: UsuariosService, private router: Router, private location:Location) { }

  ngOnInit(): void {
    M.AutoInit();

    const routeParams = this.route.snapshot.paramMap;
    this.idusuario = Number(routeParams.get('idusuario'))
  
    this.service.getUsuarioPorId(this.idusuario).subscribe(data => {
      this.usuario = data
    }
    )
  }
  efetivarAlteracao(): void {
    this.service.alterarUsuario(this.usuario).subscribe(data =>
      M.toast({ html: 'Informações atualizadas com sucesso!' })
    )
  }
  deletarUsuario(): void {
    this.service.excluirUsuario(this.idusuario).subscribe(data =>
      M.toast({ html: 'Usuário deletado com sucesso!' }))
    this.router.navigate(['/equipe'])
  }
  voltar() {
    this.location.back();
  }
  
}
