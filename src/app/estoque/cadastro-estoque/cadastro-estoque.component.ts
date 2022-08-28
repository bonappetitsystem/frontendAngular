import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../../estoque.service';

declare const M: any;

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.css']
})
export class CadastroEstoqueComponent implements OnInit {
  produtos: any = []
  selectedValue = 'diferente';

  constructor(private service: EstoqueService) { }

  ngOnInit(): void {
    M.AutoInit();
    this.consultarprodutos()
  }
  consultarprodutos(){
    this.service.getProdutos().subscribe(data => {
      console.log(data)
      this.produtos = data})

  }

}
