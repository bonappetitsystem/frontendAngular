import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

declare const M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }
  user = this.service.dataToken();

  ngOnInit(): void {
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {
      coverTrigger: false,
    });
    this.hideMenu();
  }

  logout(){
    this.service.logout();
    this.user = '';
    this.router.navigate(['/login']);
  }

  backDashboard(){
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
      this.router.navigate(['/venda']);
    }
  }

  onChangeSidebar(){
    this.showOnly(this.service.dataToken().perfil)
  }

  showOnly(perfil: string){
    if(perfil == 'GERENCIA' || perfil == 'ADMIN'){
      document.getElementById("sidebar")?.classList.toggle("hide");
    }
  }

  hideMenu(){
    if(this.router.url == '/gerencia'  && window.innerWidth > 600|| this.service.dataToken().perfil != 'GERENCIA'){
      console.log(this.router.url)
      document.getElementById("menu")?.classList.toggle("hide");
    }
  }

}
