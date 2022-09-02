import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../../cozinha/receita.service';
import { VendasService } from '../vendas.service';

declare const M: any;

@Component({
  selector: 'app-nova-venda',
  templateUrl: './nova-venda.component.html',
  styleUrls: ['./nova-venda.component.css']
})


export class NovaVendaComponent implements OnInit {

  vendas: any = [];
  selectedValue = 'comum';
  selectMoradia = 'residencial';
  selectedRadius = 'balcao'

  constructor(private service: VendasService) { }

  ngOnInit(): void {
    M.AutoInit();
    this.service.getVendas().subscribe(
      dados => this.vendas = dados
    );
  
  }


  valorTotalPorItem(valorUnitario: number, quantidade: number) {
    return valorUnitario * quantidade;
  }

  novaVenda(dados:any){
    this.service.postVenda(dados).subscribe(
      dados => {
        M.toast({html: 'Venda cadastrada com sucesso!'});
      }
    );
  }

  // cancelar(id:number){
  //   this.service.deleteVenda(id).subscribe(
  //     dados => {
  //       M.toast({html: 'Venda cancelada com sucesso!'});
  //     }
  //   );
  // }





}
