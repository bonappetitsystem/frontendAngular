import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from '../receita.service';

declare const M : any;

@Component({
  selector: 'app-visualizar-receitas',
  templateUrl: './visualizar-receitas.component.html',
  styleUrls: ['./visualizar-receitas.component.css']
})
export class VisualizarReceitasComponent implements OnInit {

  idreceita: number = 0
  receita: any = {}



  constructor(private route: ActivatedRoute, private service: ReceitaService,private router: Router) { }

  ngOnInit(): void {
    M.AutoInit();

    const routeParams = this.route.snapshot.paramMap;
    this.idreceita = Number(routeParams.get('idreceita'))
    this.service.getReceitaporId(this.idreceita).subscribe( data => {
      
      this.receita = data
      
      
      this.receita.ingredientes = this.receita.ingredientes.replace(/;/g, ';<br>');
  
      this.receita.modoDePreparo = this.receita.modoDePreparo.replace(/;/g, ';<br><br>');
      this.receita.modoDePreparo = this.receita.modoDePreparo.replace(/:;/g, ':<br>');

      console.log(this.receita)
   


      
    }
    )
  }



}
