import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/core/services/receita.service';
import { Location } from '@angular/common';
import { EstoqueService } from 'src/app/core/services/estoque.service';
import * as uuid from 'uuid';

declare const M: any;

@Component({
  selector: 'app-cadastrar-receita',
  templateUrl: './cadastrar-receita.component.html',
  styleUrls: ['./cadastrar-receita.component.css']
})


export class CadastrarReceitaComponent implements OnInit {
  


  constructor(private service: ReceitaService, private location: Location, private estoque:EstoqueService) { }


  produtos: any = [];


  ngOnInit(): void {

    this.estoque.getProdutos().subscribe(
      (res) => {
        this.produtos = res;
        console.log(this.ingredientes)
      }
    )

  }

  public ingredientes: any[] = [{
    unidadeDeMedida: '',
    quantidadeDeMedida: '',
    produto: {
      id: '',
    }
  }];

  logvalue(){

  }

  addIngrediente() {
    this.ingredientes.push({
      unidadeDeMedida: '',
      quantidade: '',
      produto: {
        id: '',
      }
    });
  }

  removeIngrediente(uId: number) {
    const index = this.ingredientes.findIndex((item) => item.id === uId);
    this.ingredientes.splice(index, 1);
  }




  addReceita(dados:any) {
    let obj = {
      titulo: dados.titulo,
      ingredientes: this.ingredientes,
      modoDePreparo: dados.modoDePreparo,
      tempoDePreparo: dados.tempoDePreparo,
      rendimento: dados.rendimento,
    }

    this.service.addReceita(obj).subscribe(
      (res) => {
        M.toast({html: 'Receita cadastrada com sucesso!'});
         window.location.reload();
      }
    )

 
  }

  back() {
    this.location.back();
  }
    

}
