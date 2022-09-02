import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ReceitaFilter {
  titulo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private http:HttpClient) { }

  getReceitas(){
    return this.http.get('http://localhost:8080/receitas');
  }

  filtrarReceitas(receitas:ReceitaFilter){
    let params = new HttpParams();

    if(receitas.titulo){
      params = params.set('titulo', receitas.titulo)
    }

    return this.http.get('http://localhost:8080/receitas', {params})

  }

  getReceitaporId(id:number){
    return this.http.get(`http://localhost:8080/receitas/${id}`);
  }

  addReceita(receitas:any){
    return this.http.post('http://localhost:8080/receitas', receitas);
  }
  


}
