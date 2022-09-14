import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EstoqueService } from 'src/app/core/services/estoque.service';

declare const M: any;

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.css']
})
export class CadastroEstoqueComponent implements OnInit {

  constructor(private service:EstoqueService, private location:Location) { }

  ngOnInit(): void {
    M.AutoInit();
  }

  addProduto(produto: any) {
    this.service.addProduto(produto)
      .subscribe(response => {
        M.toast({ html: 'Produto adicionado com sucesso!' });
        setTimeout(() => { window.location.reload(); }, 1000);
      });
  }

  back(){
    this.location.back();
  }

  

}
