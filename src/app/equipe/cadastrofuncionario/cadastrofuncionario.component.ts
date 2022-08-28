import { Router } from '@angular/router';
import { UsuariosService } from '../../usuarios.service';
import { Component, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-cadastrofuncionario',
  templateUrl: './cadastrofuncionario.component.html',
  styleUrls: ['./cadastrofuncionario.component.css']
})
export class CadastrofuncionarioComponent implements OnInit {

  constructor(private service:UsuariosService, private router: Router) { }

  ngOnInit(): void {
    M.AutoInit();
  }
  enviar(dados: any){
    this.service.cadastrarFuncionario(dados).subscribe(data => {
      M.toast({html: 'Cadastro realizado com sucesso!'});
    })
    this.router.navigate(['/equipe'])
  }

  cancelar():void{
    this.router.navigate(['/equipe'])
  }

}
