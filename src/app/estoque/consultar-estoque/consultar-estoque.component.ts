import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../../estoque.service';

@Component({
  selector: 'app-consultar-estoque',
  templateUrl: './consultar-estoque.component.html',
  styleUrls: ['./consultar-estoque.component.css']
})
export class ConsultarEstoqueComponent implements OnInit {
  estoque: any = []
  constructor(private service: EstoqueService) { }

  ngOnInit(): void {
    this.consultarEstoque()
  }
  consultarEstoque(){
    this.service.getEstoque().subscribe(data => {
      console.log(data)
      this.estoque = data})
  }

}
