import { Component, OnInit } from '@angular/core';
import { ReceitaFilter, ReceitaService } from '../receita.service';

declare const M: any;

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  titulo:string = '';

  receitas:any = [];

  constructor(private service:ReceitaService) { }

  ngOnInit(): void {
    M.AutoInit();
    //add pagination materialize
    // const elems = document.querySelectorAll('.pagination');
    // M.Pagination.init(elems, {
    //   //instance options
    //   items: 10,
    //   activePage: 1,
    //   displayedPages: 3,
    //   indicators: true,
    //   onPageChange: function(pageNumber:any) {
    //    console.log('pageNumber', pageNumber);
    //   }
    // });

    //const instances

    
    
    this.filtrarReceitas();
  }

  filtrarReceitas(){
    const filtro: ReceitaFilter = {
      titulo: this.titulo
    }

    this.service.filtrarReceitas(filtro).subscribe((data:any)=>{
      this.receitas = data;
      console.log(data);
    })
  }



}
