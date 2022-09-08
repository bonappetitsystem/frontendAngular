import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { EstoqueService } from 'src/app/core/services/estoque.service';
import { VendaService } from 'src/app/core/services/venda.service';


declare const M: any;


@Component({
  selector: 'app-nova-venda',
  templateUrl: './nova-venda.component.html',
  styleUrls: ['./nova-venda.component.css']
})
export class NovaVendaComponent implements OnInit {

  produtos: any = [];

  selectedValue = 'COMUM';
  selectPagamento = 'CARTAO';
  idProduto: any = {};
  quantidade: any = [];
  vendedor: any = {};
  quant: number = 0;
  money: any = 0;
  nome: any = '';


  formatarValor(){
    this.money = parseFloat(this.money).toFixed(2);
  }



  addQuantidade(){
    this.quantidade = [];
    for(let i = 1; i <= this.idProduto.quantidade; i++){
      this.quantidade.push(i);
      console.log(this.quantidade);
    }
  }



  constructor(private service: VendaService, private estoque:EstoqueService, private auth:AuthService) { }

  ngOnInit(): void {
    M.AutoInit();
    this.buscarProdutoNoEstoque();
    this.buscarVendedorLogado();
  }

  buscarProdutoNoEstoque(){
    this.estoque.getEstoqueAcabado().subscribe((res:any)=>{
      this.produtos = res;

    })
  }

  buscarVendedorLogado(){
    this.auth.dataToken();
    this.vendedor = this.auth.dataToken();
    }

  addVenda(dados: any){
    console.log(dados);
    console.log(this.idProduto);
    let obj = {
      estoqueAcabado:{
        id: this.idProduto.id
      },
      quantidade: this.quant,
      valorTotalDaVenda: dados.valorTotal,
      formaDePagamento: dados.pagamento,
      vendedor: this.vendedor.nome,
      troco: dados.troco,
      statusVenda: dados.tipoDaVenda != "COMUM" ? "PENDENTE": "FINALIZADA",
      dadosCliente: {
        nome: dados.nome,
        telefone: dados.telefone
      },
      tipoVenda: dados.tipoDaVenda


  }

  console.log(obj);

  this.service.addVenda(obj).subscribe((res:any)=>{
    console.log(res);
    this.buscarProdutoNoEstoque();
  })
  

}

}