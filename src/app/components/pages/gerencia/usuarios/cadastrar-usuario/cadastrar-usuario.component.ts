import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

declare const M: any;


@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  cpf: string = '';

  type = 'password';
  show = false;
  icon = 'visibility';

  toggleShow(){
    this.show = !this.show;

    if(this.show){
      this.type = 'text';
      this.icon = 'visibility_off';

    }else{
      this.type = 'password';
      this.icon = 'visibility';
    }
  }

 
  codigoEmpresa = this.auth.dataToken().empresa

  constructor(private service:UsuariosService, private router: Router, private auth:AuthService, private location:Location) { }

  ngOnInit(): void {
    M.AutoInit();
  }
  cadastrar(dados: any){
    let data = new Date(dados.dataNascimento)
    let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

    let objeto = {
      
    nome: dados.nome,
    empresa:{
      id: this.codigoEmpresa
    },
    matricula: dados.matricula,
    cpf: dados.cpf.replace(/\D/g, ''),
    genero: dados.genero,
    perfil: dados.perfil,
    dataNascimento: dataFormatada,
    senha: dados.senha,
 
  }
  console.log(objeto)
    this.service.addUsuario(objeto).subscribe(data => {
      M.toast({html: 'Cadastro realizado com sucesso!'});
    })
    this.router.navigate(['/equipe'])
  }

  cancelar():void{
    this.location.back();
  }


}
