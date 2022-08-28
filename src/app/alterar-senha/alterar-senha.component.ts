import { Router } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  constructor(private service: UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }


  esqueciMinhaSenha(dados: any) {
    this.service.esqueciMinhaSenha(dados).subscribe(data => {
      M.toast({ html: 'Senha alterada com sucesso!' })
      this.router.navigate(['/login'])
    }
    )
  }

  voltar(): void {
    this.router.navigate(['/login'])
  }

}
