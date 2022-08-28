import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

declare const M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: UsuariosService, private router: Router) { }
  user = this.service.getDadosToken()
  ngOnInit(): void {
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {
      coverTrigger: false,
    });
    this.hideMenu();
  }
  logout():void{
    localStorage.removeItem('token')
    this.user = ''
    this.router.navigate(['/login'])

  }

  onChangeSidebar(){
    this.showOnly(this.service.getDadosToken().perfil)
  }

  showOnly(perfil: string){
    if(perfil == 'gerente' || perfil == 'admin'){
      document.getElementById("sidebar")?.classList.toggle("hide");
    }
  }

  hideMenu(){
    if(this.router.url == '/dashboard'  && window.innerWidth > 600|| this.service.getDadosToken().perfil != 'gerente'){
      console.log(this.router.url)
      document.getElementById("menu")?.classList.toggle("hide");
    }
  }


  navegacao(){

    if(this.service.getDadosToken().perfil == 'gerente'){
      this.router.navigate(['/dashboard'])
    }
    else if(this.service.getDadosToken().perfil == 'cozinheiro'){
      this.router.navigate(['/receitas'])
    }
    else if(this.service.getDadosToken().perfil == 'vendedor'){
      this.router.navigate(['/vendas'])
    }
    
  }



  
}
