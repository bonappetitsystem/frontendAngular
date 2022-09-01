import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

declare const M: any;

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  funcionarios: any = []

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
    M.AutoInit();
    this.consultarFuncionarios()

  }
  consultarFuncionarios(): void{
    this.service.getFuncionarios().subscribe(data => {
      this.funcionarios = data
      console.log(data)
    })
  }

}
