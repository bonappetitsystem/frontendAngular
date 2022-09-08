import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar-venda',
  templateUrl: './finalizar-venda.component.html',
  styleUrls: ['./finalizar-venda.component.css']
})
export class FinalizarVendaComponent {

  constructor(private location:Location) { }


  back(){
    this.location.back();
  }

}
