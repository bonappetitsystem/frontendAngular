import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';





export interface ProdutoFilter {
  nome: string;

}

export interface EstoqueFilter{
  lote: string;
}

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  filtrarProdutos(filter: ProdutoFilter) {
    let params = new HttpParams();

    if (filter.nome) {
      params = params.set('nome', filter.nome);
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
    return this.http.get('http://localhost:8080/estoque');
  }

  addProduto(produto: any) {
    return this.http.post('http://localhost:8080/produtos', produto);
  }

  addEstoque(estoque: any) {
    return this.http.post('http://localhost:8080/estoque', estoque);
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:8080/produtos/${id}`);
  }

  deleteEstoque(id: number) {
    return this.http.delete(`http://localhost:8080/estoque/${id}`);
  }

  updateProduto(produto: any) {
    return this.http.put(`http://localhost:8080/produtos/${produto.id}`, produto);
  }

  updateEstoque(estoque: any) {
    return this.http.put(`http://localhost:8080/estoque/${estoque.id}`, estoque);
  }

  addEstoqueAcabado(estoque: any) {
    return this.http.post('http://localhost:8080/estoqueAcabado', estoque);
  }

  getEstoqueAcabado() {
    return this.http.get('http://localhost:8080/estoqueAcabado');
  }

  deleteEstoqueAcabado(id: number) {
    return this.http.delete(`http://localhost:8080/estoqueAcabado/${id}`);
  }

  updateEstoqueAcabado(estoque: any) {
    return this.http.put(`http://localhost:8080/estoqueAcabado/${estoque.id}`, estoque);
  }

  getEstoqueAcabadoPorId(id: number) {
    return this.http.get(`http://localhost:8080/estoqueAcabado/${id}`);
  }
  

}
