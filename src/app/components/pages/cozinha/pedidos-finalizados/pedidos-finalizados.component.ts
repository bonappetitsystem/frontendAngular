import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos-finalizados',
  templateUrl: './pedidos-finalizados.component.html',
  styleUrls: ['./pedidos-finalizados.component.css']
})
export class PedidosFinalizadosComponent {

  constructor(private location:Location) { }

  back(){
    this.location.back();
  }

}
