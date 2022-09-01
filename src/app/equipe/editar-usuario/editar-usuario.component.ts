import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../usuarios.service';
import { Router } from '@angular/router';

declare const M: any;

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  idusuario: number = 0
  usuario: any = {}

  constructor(private route: ActivatedRoute, private service: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    M.AutoInit();

    const routeParams = this.route.snapshot.paramMap;
    this.idusuario = Number(routeParams.get('idusuario'))
  
    this.service.getUsuarioId(this.idusuario).subscribe(data => {
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
    this.service.deletarUsuarioId(this.idusuario).subscribe(data =>
      M.toast({ html: 'Usuário deletado com sucesso!' }))
    this.router.navigate(['/equipe'])
  }
  voltar() {
    window.history.back()
  }
  cancelar() {
    window.history.back()
  }
}
