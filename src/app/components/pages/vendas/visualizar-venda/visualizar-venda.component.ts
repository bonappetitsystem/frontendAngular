import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-visualizar-venda',
  templateUrl: './visualizar-venda.component.html',
  styleUrls: ['./visualizar-venda.component.css']
})
export class VisualizarVendaComponent {

  constructor(private location:Location) { }

  back(){
    this.location.back();
  }


}
