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
  ingredientes: any = []



  constructor(private route: ActivatedRoute, private service: ReceitaService, private location:Location) { }

  ngOnInit(): void {
    M.AutoInit();

    const routeParams = this.route.snapshot.paramMap;
    this.idreceita = Number(routeParams.get('idreceita'))
    this.service.getReceitaporId(this.idreceita).subscribe( data => {
      console.log(data)
      
      this.receita = data
      this.ingredientes = this.receita.ingredientes


       this.receita.modoDePreparo = this.receita.modoDePreparo.replace(/(\n)(.*?)(:)/g, '<br/><b>$2</b>:');

      this.receita.modoDePreparo = this.receita.modoDePreparo.replace(/(\n)(.*?)(:)/g, '<br/><strong>$2</strong>:');

       this.receita.modoDePreparo = this.receita.modoDePreparo.replace(/\n/g, '<br>');
      
 
    }
    )
  }

  back(){
    this.location.back()
  }


}
