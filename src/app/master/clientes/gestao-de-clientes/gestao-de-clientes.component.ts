import { Component, OnInit } from '@angular/core';
import { EmpresaService, EmpresaFilter } from '../empresa.service';

@Component({
  selector: 'app-gestao-de-clientes',
  templateUrl: './gestao-de-clientes.component.html',
  styleUrls: ['./gestao-de-clientes.component.css']
})
export class GestaoDeClientesComponent implements OnInit {

  cnpj: string = '';
  razaoSocial: string = '';
  nomeFantasia: string = '';
  
  empresa: any = []

  constructor(private service: EmpresaService) { }

  ngOnInit(): void {


  }

  pesquisar(){

    const filtro: EmpresaFilter = {
      cnpj: this.cnpj,
      razaoSocial: this.razaoSocial,
      nomeFantasia: this.nomeFantasia
    }
    this.service.filtrarEmpresas(filtro).subscribe(resposta =>{
      this.empresa = resposta
      console.log(resposta)
    })
  }

}
