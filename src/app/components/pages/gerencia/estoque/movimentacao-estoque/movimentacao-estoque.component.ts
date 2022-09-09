import { Component, OnInit } from '@angular/core';
import { EstoqueService, ProdutoFilter } from 'src/app/core/services/estoque.service';

declare const M: any;

@Component({
  selector: 'app-movimentacao-estoque',
  templateUrl: './movimentacao-estoque.component.html',
  styleUrls: ['./movimentacao-estoque.component.css']
})




export class MovimentacaoEstoqueComponent implements OnInit {

 
  produtos: any = []
  selectedValue = 'diferente';
  descricao: any = '';

  constructor(private service: EstoqueService) { }

  ngOnInit(): void {
    M.AutoInit();
    this.consultarprodutos()
  }

  consultarprodutos() {
    this.service.getProdutos().subscribe(data => {
      this.produtos = data
    })
  }

  pesquisar() {

    const filtro: ProdutoFilter = {
      descricao: this.descricao
    }

    this.service.filtrarProdutos(filtro).subscribe(data => {
      this.produtos = data
    })
  }

  cadastrarEstoque(dados: any) {
    let data = new Date(dados.validade)
    let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

    console.log(dados)
    let objeto = {
      produto: {
        id: dados.id_produto
      },
      lote: dados.lote,
      quantidadeDeMedida: dados.quantidade,
      quantidadeUnitaria: dados.quantidade_unitaria,
      unidadeMedida: dados.unidade_medida,
      dataDeValidade: dataFormatada,
      valorUnitario: dados.preco
    }
    this.service.addEstoque(objeto).subscribe(data => 
      M.toast({html: 'Estoque cadastrado com sucesso!'})
      )
      window.location.reload()
  }

}
