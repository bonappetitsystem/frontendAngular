import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalizar-venda',
  templateUrl: './finalizar-venda.component.html',
  styleUrls: ['./finalizar-venda.component.css']
})
export class FinalizarVendaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigate(['/vendas'])
  }
}
