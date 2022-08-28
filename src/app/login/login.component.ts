import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }
  logar(dados:any){
    this.service.logar(dados).subscribe(data => {
      let token = JSON.stringify(data)
      let obj = JSON.parse(token)
      localStorage.setItem('token', obj.token)
      
      this.user()
    })


    
  }

  user(){

    if(this.service.getDadosToken().perfil == 'gerente'){
      this.router.navigate(['/dashboard'])
    }
    else if(this.service.getDadosToken().perfil == 'cozinheiro'){
      this.router.navigate(['/dashboard-cozinha'])
    }
    else if(this.service.getDadosToken().perfil == 'vendedor'){
      this.router.navigate(['/vendas'])
    }
    
  }
}
