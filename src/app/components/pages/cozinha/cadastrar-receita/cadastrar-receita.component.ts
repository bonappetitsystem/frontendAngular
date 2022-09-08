import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/core/services/receita.service';
import { Location } from '@angular/common';

declare const M: any;

@Component({
  selector: 'app-cadastrar-receita',
  templateUrl: './cadastrar-receita.component.html',
  styleUrls: ['./cadastrar-receita.component.css']
})

export class CadastrarReceitaComponent implements OnInit {

  constructor(private service: ReceitaService, private location: Location) { }

  ngOnInit(): void {
  }

  addReceita(dados:any) {
    this.service.addReceita(dados).subscribe(
      (res) => {
        M.toast({html: 'Receita cadastrada com sucesso!'});
        window.location.reload();
      }
    )
  }

  back() {
    this.location.back();
  }
    

}
