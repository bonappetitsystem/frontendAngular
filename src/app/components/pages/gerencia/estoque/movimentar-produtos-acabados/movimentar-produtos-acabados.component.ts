import { Component, OnInit } from '@angular/core';
import { EstoqueService } from 'src/app/core/services/estoque.service';
import { Location } from '@angular/common';
import { ReceitaService } from 'src/app/core/services/receita.service';

declare const M: any;

@Component({
  selector: 'app-movimentar-produtos-acabados',
  templateUrl: './movimentar-produtos-acabados.component.html',
  styleUrls: ['./movimentar-produtos-acabados.component.css']
})
export class MovimentarProdutosAcabadosComponent implements OnInit {

  receitas: any = []
  selectedValue = 'diferente';
  descricao: any = '';

  constructor(private service:EstoqueService, private location:Location, private receita: ReceitaService) { }

  ngOnInit(): void {
    M.AutoInit();
    this.consultarReceitas();
  }


  consultarReceitas() {
    this.receita.getReceitas().subscribe(data => {
      this.receitas = data
    })
  }



  addEstoqueAcabado(dados:any) {
    let data = new Date(dados.dataDeValidade);
    let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    console.log(dados);
    let obj = {
      descricao: dados.descricao,
      quantidade: dados.quantidade,
      receitas: {
        id: dados.receitas
      },
      preco: dados.preco,
      dataDeValidade: dataFormatada,

    }
    console.log(obj);
    this.service.addEstoqueAcabado(obj).subscribe(data => {
      M.toast({html: 'Estoque adicionado com sucesso!'});
      window.location.reload();
    })
  }



  back(){
    this.location.back();
  }


}
