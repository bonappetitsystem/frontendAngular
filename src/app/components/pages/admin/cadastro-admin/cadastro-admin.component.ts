import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';

declare const M: any;


@Component({
  selector: 'app-cadastro-admin',
  templateUrl: './cadastro-admin.component.html',
  styleUrls: ['./cadastro-admin.component.css']
})
export class CadastroAdminComponent implements OnInit {

  constructor(private service:AdminService, private router: Router) { }

  ngOnInit(): void {
    M.AutoInit();
  }

  registerAdmin(admin:any){
    this.service.registerAdmin(admin).subscribe((res)=>{
      M.toast({html: 'Admin cadastrado com sucesso!', classes: 'rounded'});
      this.router.navigate(['/admin']);
    });
  }

}
