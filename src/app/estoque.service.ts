import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  getProdutos(){
    return this.http.get(`http://localhost:8080/produtos`)
  }
  postEstoque(dados:any){
    return this.http.post(`http://localhost:8080/estoque`, dados)
  }
  getEstoque(){
    return this.http.get(`http://localhost:8080/estoque`)
  }
  getEstoqueById(id: any){
    return this.http.get(`http://localhost:8080/estoque/${id}`)
  }

}

