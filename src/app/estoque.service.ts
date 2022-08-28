import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  getProdutos(){
    return this.http.get(`http://localhost:9000/produtos`)
  }
}

