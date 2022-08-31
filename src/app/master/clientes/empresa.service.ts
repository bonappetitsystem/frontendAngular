import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface EmpresaFilter {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }



  filtrarEmpresas(filtro: EmpresaFilter) {
    let params = new HttpParams();



    if (filtro.cnpj) {
      params = params.set('cnpj', filtro.cnpj)
    }

    if (filtro.razaoSocial) {
      params = params.set('razaoSocial', filtro.razaoSocial)

    }

    if (filtro.nomeFantasia) {
      params = params.set('nomeFantasia', filtro.nomeFantasia)
    }


    return this.http.get('https://usuario-bonapt.herokuapp.com/empresas', { params })

  }

  cadastrarEmpresa(dados: any) {
    return this.http.post('https://usuario-bonapt.herokuapp.com/empresas', dados)
  }
}
