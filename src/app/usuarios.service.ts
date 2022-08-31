import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  // oauthTokenUrl = 'https://usuario-bonapt.herokuapp.com/oauth/token' 

  // logar(dados:any){
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='//angular:@ngul@r0
  //   }) 

  //     console.log(dados)
  //   const body = `username=${dados.cpf}&password=${dados.senha}&grant_type=password`;
  //   console.log(body)
  //   return this.http.post(this.oauthTokenUrl, body, {headers, withCredentials: true})

  // }

  // logar(dados:any){
  //   return this.http.post('https://bonappetitusuarios.herokuapp.com/usuarios/login', dados)
  // }


  cadastrarFuncionario(dados:any){
    return this.http.post('https://bonappetitusuarios.herokuapp.com/usuarios', dados)
  }
  
  // getDadosToken(){
  //   var token = localStorage.getItem('token') || '' 
  //   if(token !== '' ){
  //     var bodyToken = jwt_decode(token)
  //     var tokenjson = JSON.stringify(bodyToken)
  //     var tokendecodificado = JSON.parse(tokenjson)
  //     return tokendecodificado
  //   }
  //   return ''
  // }

  //esqueci minha senha
  esqueciMinhaSenha(dados:any){
    return this.http.post('https://bonappetitusuarios.herokuapp.com/usuarios/esqueci-minha-senha', dados)
  }

  getFuncionarios(){
    return this.http.get('https://bonappetitusuarios.herokuapp.com/usuarios')
  }

  getUsuarioId(id:number){
    return this.http.get(`https://bonappetitusuarios.herokuapp.com/usuarios/${id}`)
  }

  alterarUsuario(dados: any){
    return this.http.put(`https://bonappetitusuarios.herokuapp.com/usuarios/${dados.id}`, dados)
  }

  deletarUsuarioId(id:number){
    return this.http.delete(`https://bonappetitusuarios.herokuapp.com/usuarios/${id}`)
  }
}
