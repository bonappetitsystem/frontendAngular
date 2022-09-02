import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  oauthTokenUrl = 'https://usuario-bonapt.herokuapp.com/oauth/token'

  logar(dados:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='//angular:@ngul@r0
    }) 

    const body = `username=${dados.cpf}&password=${dados.senha}&grant_type=password`;
    console.log(body)
    return this.http.post(this.oauthTokenUrl, body, {headers})

  }

  isAccessTokenInvalido(){
    const token = localStorage.getItem('token')
    return !token || null;
  }

  armazarToken(token:string){
    localStorage.setItem('token', token)
  }

  obterNovoAccessToken(){
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='//angular:@ngul@r0
    })
    const body = 'grant_type=refresh_token';
    
    return this.http.post(this.oauthTokenUrl, body, {headers, withCredentials: true})
  }

  getDadosToken(){
    var token = localStorage.getItem('token') || ''
    if(token !== '' ){
      var bodyToken = jwt_decode(token)
      var tokenjson = JSON.stringify(bodyToken)
      var tokendecodificado = JSON.parse(tokenjson)
      return tokendecodificado
    }
    return ''
  }


  getToken(){
    var token = localStorage.getItem('token') || ''
    if(token !== '' ){
      return token
    }
    return ''
  }

  logOut(){
    localStorage.removeItem('token')
  }
}
