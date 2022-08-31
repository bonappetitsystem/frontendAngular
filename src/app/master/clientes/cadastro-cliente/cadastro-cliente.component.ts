import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';

declare const M: any;

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})


export class CadastroClienteComponent implements OnInit {

  constructor(private service:EmpresaService) { }

  ngOnInit(): void {
    
  }

  cadastrandoEmpresa(dados:any){
    console.log(dados)
    this.service.cadastrarEmpresa(dados).subscribe(
      (resposta) => {
        M.toast({html: 'Cadastro realizado com sucesso!'});
    
      }
    )
  }



}
