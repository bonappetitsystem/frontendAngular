import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitaService } from 'src/app/core/services/receita.service';

declare const M : any;

@Component({
  selector: 'app-editar-receita',
  templateUrl: './editar-receita.component.html',
  styleUrls: ['./editar-receita.component.css']
})
export class EditarReceitaComponent implements OnInit {

  idreceita: number = 0
  receita: any = {}

  constructor(private route: ActivatedRoute, private service: ReceitaService, private location:Location) { }

  ngOnInit(): void {
    M.AutoInit();

    const routeParams = this.route.snapshot.paramMap;
    this.idreceita = Number(routeParams.get('idreceita'))
    this.service.getReceitaporId(this.idreceita).subscribe( data => {
      
      this.receita = data
    })
  }

  back(){
    this.location.back()
  }

  alterar(): void {
    this.service.alterarReceita(this.receita).subscribe(data =>
      M.toast({ html: 'Informações atualizadas com sucesso!' })
      )
      this.location.back();
  }

}
