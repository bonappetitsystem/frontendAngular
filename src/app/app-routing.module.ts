import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/pages/admin/admin/admin.component';
import { CadastroAdminComponent } from './components/pages/admin/cadastro-admin/cadastro-admin.component';
import { CadastroClienteComponent } from './components/pages/admin/clientes/cadastro-cliente/cadastro-cliente.component';
import { CadastroRepresentanteComponent } from './components/pages/admin/clientes/cadastro-representante/cadastro-representante.component';
import { GestaoDeClientesComponent } from './components/pages/admin/clientes/clientes/clientes.component';
import { CozinhaComponent } from './components/pages/cozinha/cozinha/cozinha.component';
import { EditarReceitaComponent } from './components/pages/cozinha/editar-receita/editar-receita.component';
import { ExecucaoReceitaComponent } from './components/pages/cozinha/execucao-receita/execucao-receita.component';
import { PedidosAndamentoComponent } from './components/pages/cozinha/pedidos-andamento/pedidos-andamento.component';
import { PedidosFinalizadosComponent } from './components/pages/cozinha/pedidos-finalizados/pedidos-finalizados.component';
import { PedidosPendentesComponent } from './components/pages/cozinha/pedidos-pendentes/pedidos-pendentes.component';
import { ReceitasComponent } from './components/pages/cozinha/receitas/receitas.component';
import { VisualizarReceitaComponent } from './components/pages/cozinha/visualizar-receita/visualizar-receita.component';
import { CadastrarUsuarioComponent } from './components/pages/gerencia/usuarios/cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuarioComponent } from './components/pages/gerencia/usuarios/editar-usuario/editar-usuario.component';
import { EquipeComponent } from './components/pages/gerencia/usuarios/equipe/equipe.component';
import { GerenciaComponent } from './components/pages/gerencia/gerencia/gerencia.component';
import { VisualizarUsuarioComponent } from './components/pages/gerencia/usuarios/visualizar-usuario/visualizar-usuario.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CancelarVendaComponent } from './components/pages/vendas/cancelar-venda/cancelar-venda.component';
import { FinalizarVendaComponent } from './components/pages/vendas/finalizar-venda/finalizar-venda.component';
import { NovaVendaComponent } from './components/pages/vendas/nova-venda/nova-venda.component';
import { VendasComponent } from './components/pages/vendas/vendas/vendas.component';
import { VisualizarVendaComponent } from './components/pages/vendas/visualizar-venda/visualizar-venda.component';
import { RoleGuard } from './core/guards/role-guard.service';
import { EstoqueComponent } from './components/pages/gerencia/estoque/estoque/estoque.component';
import { CadastroEstoqueComponent } from './components/pages/gerencia/estoque/cadastro-estoque/cadastro-estoque.component';
import { MovimentacaoEstoqueComponent } from './components/pages/gerencia/estoque/movimentacao-estoque/movimentacao-estoque.component';
import { ConsultarEstoqueComponent } from './components/pages/gerencia/estoque/consultar-estoque/consultar-estoque.component';
import { CadastrarReceitaComponent } from './components/pages/cozinha/cadastrar-receita/cadastrar-receita.component';
import { MovimentarMateriaPrimaComponent } from './components/pages/gerencia/estoque/movimentar-materia-prima/movimentar-materia-prima.component';
import { MovimentarProdutosAcabadosComponent } from './components/pages/gerencia/estoque/movimentar-produtos-acabados/movimentar-produtos-acabados.component';
import { ConsultarMateriaPrimaComponent } from './components/pages/gerencia/estoque/consultar-materia-prima/consultar-materia-prima.component';
import { ConsultarProdutosAcabadosComponent } from './components/pages/gerencia/estoque/consultar-produtos-acabados/consultar-produtos-acabados.component';
import { FinanceiroComponent } from './components/pages/gerencia/financeiro/financeiro.component';
import { RelatoriosComponent } from './components/pages/gerencia/relatorios/relatorios.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'} },
  { path: 'cadastro-admin', component: CadastroAdminComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'} },
  { path: 'clientes', component: GestaoDeClientesComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'} },
  { path: 'cadastro-cliente', component: CadastroClienteComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'} },
  { path: 'cadastro-representante', component: CadastroRepresentanteComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'} },
  { path: 'gerencia', component: GerenciaComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'equipe', component: EquipeComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'visualizar-usuario/:idusuario', component: VisualizarUsuarioComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'editar-usuario/:idusuario', component: EditarUsuarioComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'estoque', component: EstoqueComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'cadastrar-estoque', component: CadastroEstoqueComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'movimentar-materia-prima', component: MovimentarMateriaPrimaComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'movimentar-produtos-acabados', component: MovimentarProdutosAcabadosComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'movimentar-estoque', component: MovimentacaoEstoqueComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'consultar-estoque', component: ConsultarEstoqueComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'consultar-materia-prima', component: ConsultarMateriaPrimaComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'consultar-produtos-acabados', component: ConsultarProdutosAcabadosComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'financeiro', component: FinanceiroComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'relatorios', component: RelatoriosComponent, canActivate: [RoleGuard], data: {expectedRole: 'GERENCIA'} },
  { path: 'vendas', component: VendasComponent, canActivate: [RoleGuard], data: {expectedRole: ['VENDA', 'GERENCIA']} },
  { path: 'nova-venda', component: NovaVendaComponent, canActivate: [RoleGuard], data: {expectedRole: ['VENDA', 'GERENCIA']}},
  { path: 'visualizar-vendas', component: VisualizarVendaComponent, canActivate: [RoleGuard], data: {expectedRole: ['VENDA','GERENCIA']} },
  { path: 'cancelar-venda', component: CancelarVendaComponent, canActivate: [RoleGuard], data: {expectedRole: ['VENDA','GERENCIA']} },
  { path: 'finalizar-venda', component: FinalizarVendaComponent, canActivate: [RoleGuard], data: {expectedRole: ['VENDA','GERENCIA']} },
  { path: 'cozinha', component: CozinhaComponent, canActivate: [RoleGuard], data: {expectedRole: ['COZINHA', 'GERENCIA']} },
  { path: 'pedidos-pendentes', component: PedidosPendentesComponent, canActivate: [RoleGuard], data: {expectedRole: ['COZINHA', 'GERENCIA']} },
  { path: 'pedidos-finalizados', component: PedidosFinalizadosComponent, canActivate: [RoleGuard], data: {expectedRole: ['COZINHA', 'GERENCIA']} },
  { path: 'pedidos-andamento', component: PedidosAndamentoComponent, canActivate: [RoleGuard], data: {expectedRole: ['COZINHA', 'GERENCIA']} },
  { path: 'receitas', component: ReceitasComponent, canActivate: [RoleGuard], data: {expectedRole: ['COZINHA', 'GERENCIA']} },
  { path: 'execucao-receita', component: ExecucaoReceitaComponent, canActivate: [RoleGuard], data: {expectedRole: ['COZINHA', 'GERENCIA']} },
  { path:'visualizar-receita/:idreceita', component: VisualizarReceitaComponent, canActivate: [RoleGuard], data: {expectedRole: ['COZINHA', 'GERENCIA']} },
  { path: 'editar-receita/:idreceita', component: EditarReceitaComponent, canActivate: [RoleGuard], data: {expectedRole: ['COZINHA', 'GERENCIA']} },
  { path: 'cadastrar-receita', component: CadastrarReceitaComponent, canActivate: [RoleGuard], data: {expectedRole: ['COZINHA', 'GERENCIA']} },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
