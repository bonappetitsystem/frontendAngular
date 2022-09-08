import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-finalizados',
  templateUrl: './pedidos-finalizados.component.html',
  styleUrls: ['./pedidos-finalizados.component.css']
})
export class PedidosFinalizadosComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back();
  }

}
