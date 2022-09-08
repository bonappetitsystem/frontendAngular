import { Component, OnInit } from '@angular/core';
import { EstoqueFilter, EstoqueService } from 'src/app/core/services/estoque.service';

declare const M: any;

@Component({
  selector: 'app-consultar-produtos-acabados',
  templateUrl: './consultar-produtos-acabados.component.html',
  styleUrls: ['./consultar-produtos-acabados.component.css']
})
export class ConsultarProdutosAcabadosComponent implements OnInit {

  estoque: any = [];
  lote: string = '';
  constructor(private service: EstoqueService) { }

  ngOnInit(): void {
    M.AutoInit();
    this.consultarEstoqueAcabado();
  }


  consultarEstoqueAcabado(){
    this.service.getEstoqueAcabado().subscribe(data => {
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
