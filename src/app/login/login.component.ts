import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  logar(dados:any){
    this.service.logar(dados).subscribe(data => {
      console.log(data)
      let token = JSON.stringify(data)
      let obj = JSON.parse(token)
      localStorage.setItem('token', obj.access_token)
      
      this.user()
    })
    
  }

  user(){
    if(this.service.getDadosToken().perfil == 'ADMIN'){
      this.router.navigate(['/admin'])
    }

    else if(this.service.getDadosToken().perfil == 'GERENCIA'){
      this.router.navigate(['/dashboard'])
    }
    else if(this.service.getDadosToken().perfil == 'COZINHA'){
      this.router.navigate(['/dashboard-cozinha'])
    }
    else if(this.service.getDadosToken().perfil == 'VENDA'){
      this.router.navigate(['/vendas'])
    }
    
  }
}
