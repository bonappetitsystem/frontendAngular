import { Component, OnInit } from '@angular/core';
import { EstoqueFilter, EstoqueService } from '../../estoque.service';

@Component({
  selector: 'app-consultar-estoque',
  templateUrl: './consultar-estoque.component.html',
  styleUrls: ['./consultar-estoque.component.css']
})
export class ConsultarEstoqueComponent implements OnInit {
  estoque: any = []
  lote: string = '';
  constructor(private service: EstoqueService) { }

  ngOnInit(): void {
    this.consultarEstoque()
  }
  consultarEstoque(){
    this.service.getEstoque().subscribe(data => {
      console.log(data)
      this.estoque = data})
  }

  filtrarEstoque(){
    const filtro: EstoqueFilter = {
     lote: this.lote
    }
    this.service.filtrarEstoque(filtro).subscribe(data => {
      console.log(data)
      this.estoque = data})
  }

}
