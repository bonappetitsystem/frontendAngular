import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../receita.service';

@Component({
  selector: 'app-visualizar-receitas',
  templateUrl: './visualizar-receitas.component.html',
  styleUrls: ['./visualizar-receitas.component.css']
})
export class VisualizarReceitasComponent implements OnInit {
  receitas: any = []
  constructor(private service:ReceitaService) { }

  ngOnInit(): void {
    this.service.getReceitas().subscribe(
      dados => this.receitas = dados
    )
  }

}
