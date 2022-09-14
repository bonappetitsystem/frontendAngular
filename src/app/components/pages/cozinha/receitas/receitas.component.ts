import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReceitaFilter, ReceitaService } from 'src/app/core/services/receita.service';


declare const M: any;

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  titulo:string = '';

  receitas:any = [];

  constructor(private service:ReceitaService, private location:Location) { }

  ngOnInit(): void {
    M.AutoInit();
   
    this.filtrarReceitas();
  }

  filtrarReceitas(){
    const filtro: ReceitaFilter = {
      titulo: this.titulo
    }

    this.service.filtrarReceitas(filtro).subscribe((data:any)=>{
      this.receitas = data;
    })
  }

  back(){
    this.location.back();
  }



}
