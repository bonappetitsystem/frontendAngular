import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstoqueService } from 'src/app/core/services/estoque.service';
import { ReceitaService } from 'src/app/core/services/receita.service';

declare const M : any;

@Component({
  selector: 'app-editar-receita',
  templateUrl: './editar-receita.component.html',
  styleUrls: ['./editar-receita.component.css']
})
export class EditarReceitaComponent implements OnInit {

  idreceita: number = 0
  receita: any = {}
  produtos: any = [];

  constructor(private route: ActivatedRoute, private service: ReceitaService, private location:Location, private estoque: EstoqueService) { }


  ngOnInit(): void {
    M.AutoInit();

    this.estoque.getProdutos().subscribe(
      (res) => {
        this.produtos = res;
      }
    )


    const routeParams = this.route.snapshot.paramMap;
    this.idreceita = Number(routeParams.get('idreceita'))
    this.service.getReceitaporId(this.idreceita).subscribe( data => {
      
      this.receita = data
    })
  }

  back(){
    this.location.back()
  }

  alterar(): void {
    
    this.service.alterarReceita(this.receita).subscribe(data =>
      M.toast({ html: 'Informações atualizadas com sucesso!' })
      )
      this.location.back();
  }

  // Editar receita
  public ingredientes: any[] = [{
    unidadeDeMedida: '',
    quantidadeDeMedida: '',
    produto: {
      id: '',
    }
  }];

  addIngrediente() {
    this.ingredientes.push({
      unidadeDeMedida: '',
      quantidade: '',
      produto: {
        id: '',
      }
    });
  }

  removeIngrediente(uId: number) {
    const index = this.ingredientes.findIndex((item) => item.id === uId);
    this.ingredientes.splice(index, 1);

    //remover ingrediente da receita
  }

  


}
