import { Component, OnInit } from '@angular/core';  
import { EstoqueFilter, EstoqueService } from 'src/app/core/services/estoque.service';

declare const M: any;

@Component({
  selector: 'app-consultar-materia-prima',
  templateUrl: './consultar-materia-prima.component.html',
  styleUrls: ['./consultar-materia-prima.component.css']
})
export class ConsultarMateriaPrimaComponent implements OnInit {
  
  estoque: any = []
  lote: string = '';
  constructor(private service: EstoqueService) { }

  ngOnInit(): void {
    M.AutoInit();
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
