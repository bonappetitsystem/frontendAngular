import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface produtoFilter {
  descricao: string;
}

export interface EstoqueFilter{
  lote: string;
}

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }
  

  filtrarProdutos(filtro: produtoFilter){

    let params = new HttpParams();

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao)
    }

    return this.http.get('http://localhost:8080/produtos', { params })
  }

  filtrarEstoque(filtro: EstoqueFilter){

    let params = new HttpParams();

    if (filtro.lote) {
      params = params.set('lote', filtro.lote)
    }

    return this.http.get('http://localhost:8080/estoques', { params })
  }

  getProdutos(){
    return this.http.get(`http://localhost:8080/produtos`)
  }
  postEstoque(dados:any){
    return this.http.post(`http://localhost:8080/estoques`, dados)
  }
  getEstoque(){
    return this.http.get(`http://localhost:8080/estoques`)
  }
  getEstoqueById(id: any){
    return this.http.get(`http://localhost:8080/estoques/${id}`)
  }

}

