import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmpresaFilter, EmpresaService } from 'src/app/core/services/empresa.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class GestaoDeClientesComponent implements OnInit {

  cnpj: string = '';
  razaoSocial: string = '';
  nomeFantasia: string = '';
  
  empresa: any = []

  constructor(private service: EmpresaService, private location:Location) { }

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

  back(){
    this.location.back();
  }

}

