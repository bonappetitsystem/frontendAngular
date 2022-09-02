import { Component, OnInit } from '@angular/core';
import { FuncionarioFilter, UsuariosService } from '../../../usuarios.service';

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

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
    M.AutoInit();
    this.consultarFuncionarios()

  }



  consultarFuncionarios(): void{
    const filtro:FuncionarioFilter = {
      cpf: this.cpf,
      nome: this.nome
    }
    this.service.getFuncionarios(filtro).subscribe(data => {
      this.funcionarios = data
      console.log(data)
    })
  }

}
