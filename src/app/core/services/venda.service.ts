import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http:HttpClient) { }

  getVendas(){
    return this.http.get('http://localhost:8080/vendas');
  }

  getVendaPorId(id:number){
    return this.http.get(`http://localhost:8080/vendas/${id}`);
  }

  addVenda(venda:any){
    return this.http.post('http://localhost:8080/vendas', venda);
  }

  alterarVenda(venda:any){
    return this.http.put(`http://localhost:8080/vendas/${venda.id}`, venda);
  }

  excluirVenda(id:number){
    return this.http.delete(`http://localhost:8080/vendas/${id}`);
  }

}
