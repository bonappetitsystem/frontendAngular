import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  url = "https://usuario-bonapt.herokuapp.com/"

  registerAdmin(admin:any){
    return this.http.post(`${this.url}admin`,admin);
  }
}
