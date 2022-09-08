import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitaService } from 'src/app/core/services/receita.service';

declare const M : any;

@Component({
  selector: 'app-visualizar-receita',
  templateUrl: './visualizar-receita.component.html',
  styleUrls: ['./visualizar-receita.component.css']
})
export class VisualizarReceitaComponent implements OnInit {


  idreceita: number = 0
  receita: any = {}



  constructor(private route: ActivatedRoute, private service: ReceitaService, private location:Location) { }

  ngOnInit(): void {
    M.AutoInit();

    const routeParams = this.route.snapshot.paramMap;
    this.idreceita = Number(routeParams.get('idreceita'))
    this.service.getReceitaporId(this.idreceita).subscribe( data => {
      
      this.receita = data

      //add \n before the text

      //add \n before beginning of text
      this.receita.ingredientes = this.receita.ingredientes.replace(/^(.)/g, " \n$1");

      this.receita.modoDePreparo = this.receita.modoDePreparo.replace(/^(.)/g, " \n$1");


      //capture word between \n and :
      this.receita.ingredientes = this.receita.ingredientes.replace(/(\n)(.*?)(:)/g, '<br/><b>$2</b>:');

      this.receita.modoDePreparo = this.receita.modoDePreparo.replace(/(\n)(.*?)(:)/g, '<br/><b>$2</b>:');

      
      
      this.receita.modoDePreparo = this.receita.modoDePreparo.replace(/\n/g, '<br>');
      
      this.receita.ingredientes = this.receita.ingredientes.replace(/\n/g, '<br>');
 
    }
    )
  }

  back(){
    this.location.back()
  }


}
