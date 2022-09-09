import { Location } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-pedidos-pendentes',
  templateUrl: './pedidos-pendentes.component.html',
  styleUrls: ['./pedidos-pendentes.component.css']
})
export class PedidosPendentesComponent {

  constructor(private location:Location) { }

  back(){
    this.location.back();
  }
}
