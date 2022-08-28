import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private http:HttpClient) { }

  getReceitas(){
    return this.http.get('http://localhost:3000/receitas');
  }

  getReceita(id:number){
    return this.http.get('http://localhost:3000/receitas/'+id);
  }

  addReceita(receitas:any){
    return this.http.post('http://localhost:3000/receitas', receitas);
  }
  


}
