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

  selectedValue = '';
  selectPagamento = '';
  idProduto: any = {};
  quantidade: any = [];
  vendedor: any = {};
  quant: number = 0;
  money: any = 0;
  nome: any = '';



  public item: any [] = []

  addItem(dados:any){
    this.item.push({
      estoqueAcabado: {
        id: dados.produto.id,
        nomeProduto: dados.produto.nomeProduto,
        preco: dados.produto.preco,
        quantidade: dados.produto.quantidade
      },
      quantidade: dados.quantidade,
      valorUnitario: dados.produto.preco,
      valorTotal: dados.produto.preco * dados.quantidade,
      nomeItem: dados.produto.nomeProduto,
    })
    
    console.log(this.item)
    this.idProduto.quantidade = dados.produto.quantidade - dados.quantidade;
    //limpar os campos do form de venda no html
    this.quant = 0;
    this.idProduto = {};
    this.money = 0;
    this.addQuantidade();
    
    
  }

  removeItem(uId: number){
    const index = this.item.findIndex((item) => item.id === uId);
    this.item.splice(index, 1);
  }



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

  addVenda(){
    
    let obj = {
      itens: this.item,
      formaDePagamento: this.selectPagamento,
      vendedor: this.vendedor.nome,
      tipoVenda: this.selectedValue,
      valorTotalPago: this.money


  }

  console.log(obj);

  this.service.addVenda(obj).subscribe((res:any)=>{
    console.log(res);
    this.buscarProdutoNoEstoque();
  })
  

}

}