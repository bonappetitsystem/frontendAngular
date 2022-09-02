import { AdicionarReceitasComponent } from './cozinha/adicionar-receitas/adicionar-receitas.component';
import { DashboardComponent } from './gerencia/dashboard/dashboard.component';
import { Component, NgModule } from '@angular/core';
import { EquipeComponent } from './gerencia/usuarios/equipe/equipe.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RelatoriosComponent } from './gerencia/relatorios/relatorios.component';
import { AuthguardGerenteService } from './gerencia/authguard-gerente.service';
import { CadastrofuncionarioComponent } from './gerencia/usuarios/cadastrofuncionario/cadastrofuncionario.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { VisualizarReceitasComponent } from './cozinha/visualizar-receitas/visualizar-receitas.component';
import { EditarReceitaComponent } from './cozinha/editar-receita/editar-receita.component';
import { VendasComponent } from './venda/vendas/vendas.component';
import { NovaVendaComponent } from './venda/nova-venda/nova-venda.component';
import { AuthguardCozinheiroService } from './cozinha/authguard-cozinheiro.service';
import { AuthguardVendedorService } from './venda/authguard-vendedor.service';
import { VisualizarUsuarioComponent } from './gerencia/usuarios/visualizar-usuario/visualizar-usuario.component';
import { CadastroEstoqueComponent } from './gerencia/estoque/cadastro-estoque/cadastro-estoque.component';
import { EstoqueComponent } from './gerencia/estoque/estoque/estoque.component';
import { MovimentacaoEstoqueComponent } from './gerencia/estoque/movimentacao-estoque/movimentacao-estoque.component';
import { CancelarVendaComponent } from './venda/cancelar-venda/cancelar-venda.component';
import { DashboardCozinhaComponent } from './cozinha/dashboard-cozinha/dashboard-cozinha.component';
import { FinalizarVendaComponent } from './venda/finalizar-venda/finalizar-venda.component';
import { GestaoDeClientesComponent } from './master/clientes/gestao-de-clientes/gestao-de-clientes.component';
import { CadastroClienteComponent } from './master/clientes/cadastro-cliente/cadastro-cliente.component';
import { FinanceiroComponent } from './gerencia/financeiro/financeiro.component';
import { EditarUsuarioComponent } from './gerencia/usuarios/editar-usuario/editar-usuario.component';
import { ExecucaoReceitaComponent } from './cozinha/execucao-receita/execucao-receita.component';
import { PedidosPendentesComponent } from './cozinha/pedidos-pendentes/pedidos-pendentes.component';
import { AlterarVendaComponent } from './venda/alterar-venda/alterar-venda.component';
import { PedidosAndamentoComponent } from './cozinha/pedidos-andamento/pedidos-andamento.component';
import { PedidosFinalizadosComponent } from './cozinha/pedidos-finalizados/pedidos-finalizados.component';
import { AtualizarEstoqueComponent } from './gerencia/estoque/atualizar-estoque/atualizar-estoque.component';
import { ConsultarEstoqueComponent } from './gerencia/estoque/consultar-estoque/consultar-estoque.component';
import { DashboardAdminComponent } from './master/dashboard-admin/dashboard-admin.component';
import { AuthguardAdminService } from './master/authguard-admin.service';
import { VisualizarClienteComponent } from './master/clientes/visualizar-cliente/visualizar-cliente.component';
import { ReceitasComponent } from './cozinha/receitas/receitas.component';



const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'vendas', canActivate: [AuthguardVendedorService], component: VendasComponent },
  { path: 'dashboard', canActivate: [AuthguardGerenteService], component: DashboardComponent },
  { path: 'dashboard-cozinha', canActivate: [AuthguardCozinheiroService], component: DashboardCozinhaComponent },
  { path: 'receitas', canActivate: [AuthguardCozinheiroService], component: ReceitasComponent },
  { path: 'adicionar-receitas', component: AdicionarReceitasComponent, canActivate: [AuthguardGerenteService] },
  { path: 'equipe', component: EquipeComponent, canActivate: [AuthguardGerenteService] },
  { path: 'relatorios', component: RelatoriosComponent, canActivate: [AuthguardGerenteService] },
  { path: 'cadastro-funcionario', component: CadastrofuncionarioComponent, canActivate: [AuthguardGerenteService] },
  { path: 'alterar-senha', component: AlterarSenhaComponent },
  { path: 'editar-receita/:idreceita', component: EditarReceitaComponent, canActivate: [AuthguardGerenteService] },
  { path: 'visualizar-receitas/:idreceita', component: VisualizarReceitasComponent, canActivate: [AuthguardCozinheiroService] },
  { path: 'nova-venda', component: NovaVendaComponent, canActivate: [AuthguardVendedorService] },
  { path: 'visualizar-usuario/:idusuario', component: VisualizarUsuarioComponent, canActivate: [AuthguardGerenteService] },
  { path: 'estoque', component: EstoqueComponent, canActivate: [AuthguardGerenteService] },
  { path: 'movimentacao-estoque', component: MovimentacaoEstoqueComponent, canActivate: [AuthguardGerenteService] },
  { path: 'cadastro-estoque', component: CadastroEstoqueComponent, canActivate: [AuthguardGerenteService] },
  { path: 'cancelar-venda', component: CancelarVendaComponent,canActivate: [AuthguardVendedorService] },
  { path: 'finalizar-venda', component: FinalizarVendaComponent,canActivate: [AuthguardVendedorService] },
  { path: 'gestao-de-clientes', component: GestaoDeClientesComponent,canActivate: [AuthguardAdminService] },
  { path: 'cadastro-cliente', component:CadastroClienteComponent,canActivate: [AuthguardAdminService] },
  {path: 'financeiro', component: FinanceiroComponent, canActivate: [AuthguardGerenteService] },
  {path:'editar-usuario/:idusuario', component:EditarUsuarioComponent, canActivate: [AuthguardGerenteService]},
  {path: 'execucao-receita', component: ExecucaoReceitaComponent, canActivate: [AuthguardCozinheiroService] },
  {path: 'pedidos-pendentes', component: PedidosPendentesComponent, canActivate: [AuthguardCozinheiroService] },
  {path: 'pedidos-andamento', component: PedidosAndamentoComponent, canActivate: [AuthguardCozinheiroService]},
  {path: 'pedidos-finalizados', component: PedidosFinalizadosComponent, canActivate: [AuthguardCozinheiroService]},
  {path: 'atualizar-estoque', component : AtualizarEstoqueComponent, canActivate:[AuthguardGerenteService]},
  {path: 'consultar-estoque', component: ConsultarEstoqueComponent, canActivate:[AuthguardGerenteService]},
  {path: 'alterar-venda', component: AlterarVendaComponent, canActivate: [AuthguardVendedorService] },
  {path: 'atualizar-estoque/:idestoque', component : AtualizarEstoqueComponent, canActivate:[AuthguardGerenteService]},
  {path: 'consultar-estoque', component: ConsultarEstoqueComponent, canActivate:[AuthguardGerenteService]},
  {path: 'admin', component:DashboardAdminComponent, canActivate: [AuthguardAdminService] },
  {path:'visualizar-cliente', component:VisualizarClienteComponent, canActivate: [AuthguardAdminService] },
  {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
