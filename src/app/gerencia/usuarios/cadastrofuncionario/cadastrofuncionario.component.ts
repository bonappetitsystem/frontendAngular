import { Router } from '@angular/router';
import { UsuariosService } from '../../../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

declare const M: any;

@Component({
  selector: 'app-cadastrofuncionario',
  templateUrl: './cadastrofuncionario.component.html',
  styleUrls: ['./cadastrofuncionario.component.css']
})
export class CadastrofuncionarioComponent implements OnInit {

  codigoEmpresa = this.auth.getDadosToken().empresa

  constructor(private service:UsuariosService, private router: Router, private auth:AuthService) { }

  ngOnInit(): void {
    M.AutoInit();
  }
  enviar(dados: any){
    console.log(dados)
    let data = new Date(dados.dataNascimento)
    let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

    let objeto = {
      
    nome: dados.nome,
    empresa:{
      id: this.codigoEmpresa
    },
    matricula: dados.matricula,
    cpf: dados.cpf,
    genero: dados.genero,
    perfil: dados.perfil,
    dataNascimento: dataFormatada,
    senha: dados.senha,
 
  }
  console.log(objeto)
    this.service.cadastrarFuncionario(objeto).subscribe(data => {
      console.log(data)
      M.toast({html: 'Cadastro realizado com sucesso!'});
    })
    this.router.navigate(['/equipe'])
  }

  cancelar():void{
    this.router.navigate(['/equipe'])
  }

}
