import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancelar-venda',
  templateUrl: './cancelar-venda.component.html',
  styleUrls: ['./cancelar-venda.component.css']
})
export class CancelarVendaComponent {

  constructor(private location: Location) { }

  back(){
    this.location.back();
  }

}
