import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelar-venda',
  templateUrl: './cancelar-venda.component.html',
  styleUrls: ['./cancelar-venda.component.css']
})
export class CancelarVendaComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigate(['/vendas'])
  }
}
