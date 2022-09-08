import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-cadastro-representante',
  templateUrl: './cadastro-representante.component.html',
  styleUrls: ['./cadastro-representante.component.css']
})
export class CadastroRepresentanteComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back();
  }

}
