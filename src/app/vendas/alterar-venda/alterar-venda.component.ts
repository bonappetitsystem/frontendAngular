import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendasService } from '../../vendas.service';

declare const M: any;

@Component({
  selector: 'app-alterar-venda',
  templateUrl: './alterar-venda.component.html',
  styleUrls: ['./alterar-venda.component.css']
})
export class AlterarVendaComponent implements OnInit {
  idVenda: number = 0;
  venda: any = {};

  constructor(private route:ActivatedRoute, private service: VendasService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idVenda = Number(routeParams.get('id'));
    // this.service.getVendaById(this.idVenda).subscribe(
    //   dados => this.venda = dados,
    //   M.toast({html: 'Venda alterada com sucesso!'})
    // );
  }

}
