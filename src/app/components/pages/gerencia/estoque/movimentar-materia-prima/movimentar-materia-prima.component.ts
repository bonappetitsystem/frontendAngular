import { Component, OnInit } from '@angular/core';
import { EstoqueService, ProdutoFilter } from 'src/app/core/services/estoque.service';
import { Location } from '@angular/common';

declare const M: any;

@Component({
  selector: 'app-movimentar-materia-prima',
  templateUrl: './movimentar-materia-prima.component.html',
  styleUrls: ['./movimentar-materia-prima.component.css']
})
export class MovimentarMateriaPrimaComponent implements OnInit {

  produtos: any = []
  selectedValue = 'diferente';
  descricao: any = '';

  constructor(private service: EstoqueService, private location: Location) { }

  ngOnInit(): void {
    M.AutoInit();
    this.consultarprodutos()
  }

  consultarprodutos() {
    this.service.getProdutos().subscribe(data => {
      console.log(data)
      this.produtos = data
    })
  }

  pesquisar() {

    const filtro: ProdutoFilter = {
      descricao: this.descricao
    }

    this.service.filtrarProdutos(filtro).subscribe(data => {
      console.log(data)
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

  back(){
    this.location.back()
  }

}
