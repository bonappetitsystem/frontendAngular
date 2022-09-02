import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

export interface FuncionarioFilter {
  cpf: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }


  cadastrarFuncionario(dados:any){
    return this.http.post('https://usuario-bonapt.herokuapp.com/funcionarios', dados)
  }
  

  esqueciMinhaSenha(dados:any){
    return this.http.post('https://bonappetitusuarios.herokuapp.com/usuarios/esqueci-minha-senha', dados)
  }

  

  getFuncionarios(filtro: FuncionarioFilter) {
    let params = new HttpParams();

    if (filtro.cpf) {
      params = params.set('cpf', filtro.cpf)
    }

    if (filtro.nome) {
      params = params.set('nome', filtro.nome)
    }

    return this.http.get('https://usuario-bonapt.herokuapp.com/funcionarios', { params })

  }

  getUsuarioId(id:number){
    return this.http.get(`https://usuario-bonapt.herokuapp.com/funcionarios/${id}`)
  }

  alterarUsuario(dados: any){
    return this.http.put(`https://usuario-bonapt.herokuapp.com/funcionarios/${dados.id}`, dados)
  }

  deletarUsuarioId(id:number){
    return this.http.delete(`https://usuario-bonapt.herokuapp.com/funcionarios/${id}`)
  }
}
