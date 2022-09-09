import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos-andamento',
  templateUrl: './pedidos-andamento.component.html',
  styleUrls: ['./pedidos-andamento.component.css']
})
export class PedidosAndamentoComponent {

  constructor(private location: Location) { }

  back() {
    this.location.back();
  }

}
