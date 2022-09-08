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

  filtrarProdutos(filter: produtoFilter) {
    let params = new HttpParams();

    if (filter.descricao) {
      params = params.set('descricao', filter.descricao);
    }

    return this.http.get('http://localhost:8080/produtos', { params })
  }

  filtrarEstoque(filter: EstoqueFilter) {
    let params = new HttpParams();

    if (filter.lote) {
      params = params.set('lote', filter.lote);
    }

    return this.http.get('http://localhost:8080/estoques', { params })
  }


    

  getProdutos() {
    return this.http.get('http://localhost:8080/produtos');
  }

  getEstoque() {
    return this.http.get('http://localhost:8080/estoques');
  }

  addProduto(produto: any) {
    return this.http.post('http://localhost:8080/produtos', produto);
  }

  addEstoque(estoque: any) {
    return this.http.post('http://localhost:8080/estoques', estoque);
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:8080/produtos/${id}`);
  }

  deleteEstoque(id: number) {
    return this.http.delete(`http://localhost:8080/estoques/${id}`);
  }

  updateProduto(produto: any) {
    return this.http.put(`http://localhost:8080/produtos/${produto.id}`, produto);
  }

  updateEstoque(estoque: any) {
    return this.http.put(`http://localhost:8080/estoques/${estoque.id}`, estoque);
  }

  addEstoqueAcabado(estoque: any) {
    return this.http.post('http://localhost:8080/estoquesAcabados', estoque);
  }

  getEstoqueAcabado() {
    return this.http.get('http://localhost:8080/estoquesAcabados');
  }

  deleteEstoqueAcabado(id: number) {
    return this.http.delete(`http://localhost:8080/estoquesAcabados/${id}`);
  }

  updateEstoqueAcabado(estoque: any) {
    return this.http.put(`http://localhost:8080/estoquesAcabados/${estoque.id}`, estoque);
  }

  getEstoqueAcabadoPorId(id: number) {
    return this.http.get(`http://localhost:8080/estoquesAcabados/${id}`);
  }
  

}
