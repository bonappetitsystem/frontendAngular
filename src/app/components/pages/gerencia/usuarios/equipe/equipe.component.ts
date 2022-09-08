import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

declare const M: any;

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  funcionarios: any = []
  cpf: string = ''
  nome: string = ''

  constructor(private service: UsuariosService, private location:Location) { }

  ngOnInit(): void {
    M.AutoInit();
    this.getFuncionarios()

  }


  getFuncionarios(): void {
    this.service.getUsuarios({ cpf: this.cpf, nome: this.nome }).subscribe(data => {
      this.funcionarios = data
    })
  }

  //esconder elementos quando filtro diferente de vazio
  esconder() {
    if (this.cpf != '' && this.nome != '') {
      return true
    } else {
      return false
    }
  }

  back() {
    this.location.back();
  }

}
