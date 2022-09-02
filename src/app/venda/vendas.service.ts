import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(private http:HttpClient) { }

  getVendas(){
    return this.http.get(`http://localhost:8080/vendas`);
  }

  getVendaById(id:any) {
    return this.http.get(`http://localhost:8080/vendas/${id}`);
  }

  postVenda(venda:any) {
    return this.http.post(`http://localhost:8080/vendas`, venda);
  }

  putVenda(venda:any) {
    return this.http.put(`http://localhost:8080/vendas/${venda.id}`, venda);
  }

  deleteVenda(id:any) {
    return this.http.delete(`http://localhost:8080/vendas/${id}`);
  }

  //BUSCAR PRODUTO POR NOME
  getProdutoByNome(nome:any) {
    return this.http.get(`http://localhost:8080/produtos/:${nome}`);
  }



}
