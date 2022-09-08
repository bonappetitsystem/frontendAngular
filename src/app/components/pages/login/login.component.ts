import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private service:AuthService, private router:Router) { }

  cpf = '';

  login(dados:any){
    
    dados.cpf = dados.cpf.replace(/\D/g, '');
    this.service.login(dados).subscribe((res:any) => {
      let token = JSON.stringify(res);
      let obj = JSON.parse(token);
      localStorage.setItem('token', obj.access_token);
      this.role();
    })
  }

  role(){
    if(this.service.dataToken().perfil == 'ADMIN'){
      this.router.navigate(['/admin']);
    }
    else if(this.service.dataToken().perfil == 'GERENCIA'){
      this.router.navigate(['/gerencia']);
    }

    else if(this.service.dataToken().perfil == 'COZINHA'){
      this.router.navigate(['/cozinha']);
    }

    else if(this.service.dataToken().perfil == 'VENDA'){
      this.router.navigate(['/vendas']);
    }

  }

  type = 'password';
  show = false;
  icon = 'visibility';

  toggleShow(){
    this.show = !this.show;

    if(this.show){
      this.type = 'text';
      this.icon = 'visibility_off';

    }else{
      this.type = 'password';
      this.icon = 'visibility';
    }
  }


}
