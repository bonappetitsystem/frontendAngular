import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/core/services/empresa.service';

declare const M: any;

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  constructor(private service:EmpresaService, private router: Router, private location:Location) { }

  telefone = '';
  celular = '';
  cnpj = '';

  ngOnInit(): void {
    
  }

  registerCompany(dados:any){
    console.log(dados);
   let obj = {
      cnpj: dados.cnpj.replace(/\D/g, ''),
      razaoSocial: dados.razaoSocial,
      nomeFantasia: dados.nomeFantasia,
      inscricaoEstadual: dados.inscricaoEstadual,
      inscricaoMunicipal: dados.inscricaoMunicipal,
      sigla: dados.sigla,
      endereco: {
        cep: dados.cep,
        logradouro: dados.logradouro,
        numero: dados.numero,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.cidade,
        uf: dados.uf
      },
      contato: {
        telefone: dados.telefone.replace(/\D/g, ''),
        whatsapp: dados.celular.replace(/\D/g, ''),
        email: dados.email,
        site: dados.site
      }
    }
    console.log(obj);
    this.service.registerCompany(obj).subscribe(
      (resposta) => {
        M.toast({html: 'Cadastro realizado com sucesso!'});
        this.router.navigate(['/cadastro-representante']);
    
      }
    )
  }

  back(){
    this.location.back();
  }



}
