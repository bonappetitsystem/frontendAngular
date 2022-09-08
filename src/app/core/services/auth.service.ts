import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }

  url = 'https://usuario-bonapt.herokuapp.com/';

  public isAuthenticated():boolean {
    const token = localStorage.getItem('token') || '';
    if(token != ''){
      return true;
    }
    return false;
  }

  public login(user:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='
    })

    const body = `username=${user.cpf}&password=${user.senha}&grant_type=password`;
    return this.http.post(`${this.url}oauth/token`, body, {headers, withCredentials: true});
  }

  public dataToken(){
    const token = localStorage.getItem('token') || '';

    if(token != ''){
      let bodyToken = decode(token);
      let tokenJson = JSON.stringify(bodyToken);
      let decodeToken = JSON.parse(tokenJson);
      return decodeToken;
    }

    return '';

  }

  public isAccessTokenInvalid(){
    const token = localStorage.getItem('token');
    return !token || null;
  }

  public getNewAccessToken(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='
    })

    const body = 'grant_type=refresh_token';
    return this.http.post(`${this.url}oauth/token`, body, {headers, withCredentials: true});
  }

  public logout(){
    localStorage.removeItem('token');
  }


    


}