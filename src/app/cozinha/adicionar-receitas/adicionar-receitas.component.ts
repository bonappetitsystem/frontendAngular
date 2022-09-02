import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../receita.service';

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


    let btn_ingredientes = document.getElementById('ingrediente');
    let box = document.getElementById('box');

    let contador = 0

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
