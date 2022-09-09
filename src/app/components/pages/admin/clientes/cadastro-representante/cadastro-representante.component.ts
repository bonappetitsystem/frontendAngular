import { Location } from '@angular/common';
import { Component } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-cadastro-representante',
  templateUrl: './cadastro-representante.component.html',
  styleUrls: ['./cadastro-representante.component.css']
})
export class CadastroRepresentanteComponent {

  constructor(private location:Location) { }

  back(){
    this.location.back();
  }

}
