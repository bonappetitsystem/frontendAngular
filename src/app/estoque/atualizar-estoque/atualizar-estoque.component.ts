import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstoqueService } from 'src/app/estoque.service';

declare const M : any;

@Component({
  selector: 'app-atualizar-estoque',
  templateUrl: './atualizar-estoque.component.html',
  styleUrls: ['./atualizar-estoque.component.css']
})
export class AtualizarEstoqueComponent implements OnInit {
  idestoque: number = 0
  produto: any = {}
  produtos: any = []
  novoProduto: boolean = false

  constructor(private route: ActivatedRoute, private service: EstoqueService,private router: Router) { }

  ngOnInit(): void {
    M.AutoInit();

    console.log(this.novoProduto)
    this.consultarprodutos()
    const routeParams = this.route.snapshot.paramMap;
    this.idestoque = Number(routeParams.get('idestoque'))
    this.service.getEstoqueById(this.idestoque).subscribe(data => {
      console.log(data)
      this.produto = data
    })
  }

    consultarprodutos(){
      this.service.getProdutos().subscribe(data => {
        console.log(data)
        this.produtos = data})
    }

    ngIf(){
      console.log(this.novoProduto)
      this.novoProduto == true
    }

}
