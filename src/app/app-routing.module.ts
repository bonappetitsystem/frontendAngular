import { AdicionarReceitasComponent } from './adicionar-receitas/adicionar-receitas.component';
import { ReceitasComponent } from './dashboard-cozinha/receitas/receitas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component, NgModule } from '@angular/core';
import { EquipeComponent } from './equipe/equipe.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { AuthguardGerenteService } from './authguard-gerente.service';
import { CadastrofuncionarioComponent } from './equipe/cadastrofuncionario/cadastrofuncionario.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { VisualizarReceitasComponent } from './visualizar-receitas/visualizar-receitas.component';
import { EditarReceitaComponent } from './editar-receita/editar-receita.component';
import { VendasComponent } from './vendas/vendas.component';
import { NovaVendaComponent } from './vendas/nova-venda/nova-venda.component';
import { AuthguardCozinheiroService } from './authguard-cozinheiro.service';
import { AuthguardVendedorService } from './authguard-vendedor.service';
import { VisualizarUsuarioComponent } from './equipe/visualizar-usuario/visualizar-usuario.component';
import { CadastroEstoqueComponent } from './estoque/cadastro-estoque/cadastro-estoque.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { MovimentacaoEstoqueComponent } from './estoque/movimentacao-estoque/movimentacao-estoque.component';
import { CancelarVendaComponent } from './vendas/cancelar-venda/cancelar-venda.component';
import { DashboardCozinhaComponent } from './dashboard-cozinha/dashboard-cozinha.component';
import { FinalizarVendaComponent } from './vendas/finalizar-venda/finalizar-venda.component';
import { GestaoDeClientesComponent } from './master/clientes/gestao-de-clientes/gestao-de-clientes.component';
import { CadastroClienteComponent } from './master/clientes/cadastro-cliente/cadastro-cliente.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { EditarUsuarioComponent } from './equipe/editar-usuario/editar-usuario.component';
import { ExecucaoReceitaComponent } from './dashboard-cozinha/execucao-receita/execucao-receita.component';
import { PedidosPendentesComponent } from './dashboard-cozinha/pedidos-pendentes/pedidos-pendentes.component';
import { AlterarVendaComponent } from './vendas/alterar-venda/alterar-venda.component';
import { PedidosAndamentoComponent } from './dashboard-cozinha/pedidos-andamento/pedidos-andamento.component';
import { PedidosFinalizadosComponent } from './dashboard-cozinha/pedidos-finalizados/pedidos-finalizados.component';
import { AtualizarEstoqueComponent } from './estoque/atualizar-estoque/atualizar-estoque.component';
import { ConsultarEstoqueComponent } from './estoque/consultar-estoque/consultar-estoque.component';
import { DashboardAdminComponent } from './master/dashboard-admin/dashboard-admin.component';
import { AuthguardAdminService } from './authguard-admin.service';
import { VisualizarClienteComponent } from './master/clientes/visualizar-cliente/visualizar-cliente.component';



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
  { path: 'editar-receita', component: EditarReceitaComponent, canActivate: [AuthguardGerenteService] },
  { path: 'visualizar-receitas', component: VisualizarReceitasComponent, canActivate: [AuthguardCozinheiroService] },
  { path: 'nova-venda', component: NovaVendaComponent, canActivate: [AuthguardVendedorService] },
  { path: 'visualizar-usuario/:idusuario', component: VisualizarUsuarioComponent, canActivate: [AuthguardGerenteService] },
  { path: 'estoque', component: EstoqueComponent, canActivate: [AuthguardGerenteService] },
  { path: 'movimento-estoque', component: MovimentacaoEstoqueComponent, canActivate: [AuthguardGerenteService] },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
