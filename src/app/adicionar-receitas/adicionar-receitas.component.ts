import { BinaryOperatorExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../receita.service';

// interface IReceita {
//   title: string;
//   ingredientes: string;
//   modoPreparo: string;
// }

@Component({
  selector: 'app-adicionar-receitas',
  templateUrl: './adicionar-receitas.component.html',
  styleUrls: ['./adicionar-receitas.component.css']
})
export class AdicionarReceitasComponent implements OnInit {

  receitas: any = [];

  constructor(private service: ReceitaService) { }

  ngOnInit(): void {
    
     this.service.getReceitas().subscribe(
      dados=> this.receitas = dados
    );
  }
  
  msg: string = "";

  addReceita(dados: any):void {
    this.service.addReceita(dados).subscribe(
      dados => this.msg = 'Receita adicionada com sucesso!'
    );  


    var btn_ingredientes = document.getElementById('ingrediente');
    var box = document.getElementById('box');

    var contador = 0

    btn_ingredientes?.addEventListener('click', function(){
      contador++
      createInput()
    })
    
    function createInput(){
      var elemento = document.createElement('input')
      elemento.setAttribute('type', 'text')
      elemento.setAttribute('id','nome_' + contador)
      elemento.setAttribute('placeholder', 'Informe os ingredientes da receita')
      
      box?.appendChild(elemento)
    }
  
  }

}
