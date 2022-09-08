import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface FuncionarioFilter {
  cpf: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  getUsuarios(filtro: FuncionarioFilter){
    let params = new HttpParams();

    if(filtro.cpf){
      params = params.set('cpf', filtro.cpf)
    }

    if(filtro.nome){
      params = params.set('nome', filtro.nome)
    }

    return this.http.get('https://usuario-bonapt.herokuapp.com/funcionarios', { params })
  }

  getUsuarioPorId(id:number){
    return this.http.get(`https://usuario-bonapt.herokuapp.com/funcionarios/${id}`);
  }

  addUsuario(usuario:any){
    return this.http.post('https://usuario-bonapt.herokuapp.com/funcionarios', usuario);
  }

  alterarUsuario(usuario:any){
    return this.http.put(`https://usuario-bonapt.herokuapp.com/funcionarios/${usuario.id}`, usuario);
  }

  excluirUsuario(id:number){
    return this.http.delete(`https://usuario-bonapt.herokuapp.com/funcionarios/${id}`);
  }


}
