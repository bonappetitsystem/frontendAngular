import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-andamento',
  templateUrl: './pedidos-andamento.component.html',
  styleUrls: ['./pedidos-andamento.component.css']
})
export class PedidosAndamentoComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back();
  }

}
