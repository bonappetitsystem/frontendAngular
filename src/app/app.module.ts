import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceitasComponent } from './dashboard-cozinha/receitas/receitas.component';
import { AdicionarReceitasComponent } from './adicionar-receitas/adicionar-receitas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EquipeComponent } from './equipe/equipe.component';
import { LoginComponent } from './login/login.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { CadastrofuncionarioComponent } from './equipe/cadastrofuncionario/cadastrofuncionario.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { VisualizarReceitasComponent } from './visualizar-receitas/visualizar-receitas.component';
import { EditarReceitaComponent } from './editar-receita/editar-receita.component';
import { VendasComponent } from './vendas/vendas.component';
import { NovaVendaComponent } from './vendas/nova-venda/nova-venda.component';
import { AlterarVendaComponent } from './vendas/alterar-venda/alterar-venda.component';
import { VisualizarUsuarioComponent } from './equipe/visualizar-usuario/visualizar-usuario.component';
import { CadastroEstoqueComponent } from './estoque/cadastro-estoque/cadastro-estoque.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { MovimentacaoEstoqueComponent } from './estoque/movimentacao-estoque/movimentacao-estoque.component';
import { CancelarVendaComponent } from './vendas/cancelar-venda/cancelar-venda.component';
import { DashboardCozinhaComponent } from './dashboard-cozinha/dashboard-cozinha.component';
import { FinalizarVendaComponent } from './vendas/finalizar-venda/finalizar-venda.component';
import { GestaoDeClientesComponent } from './master/clientes/gestao-de-clientes/gestao-de-clientes.component';
import { CadastroClienteComponent } from './master/clientes/cadastro-cliente/cadastro-cliente.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditarUsuarioComponent } from './equipe/editar-usuario/editar-usuario.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { ExecucaoReceitaComponent } from './dashboard-cozinha/execucao-receita/execucao-receita.component';
import { PedidosPendentesComponent } from './dashboard-cozinha/pedidos-pendentes/pedidos-pendentes.component';
import { ButtonMenuComponent } from './button-menu/button-menu.component';
import { PedidosAndamentoComponent } from './dashboard-cozinha/pedidos-andamento/pedidos-andamento.component';
import { PedidosFinalizadosComponent } from './dashboard-cozinha/pedidos-finalizados/pedidos-finalizados.component';
import { AtualizarEstoqueComponent } from './estoque/atualizar-estoque/atualizar-estoque.component';
import { ConsultarEstoqueComponent } from './estoque/consultar-estoque/consultar-estoque.component';
import { DashboardAdminComponent } from './master/dashboard-admin/dashboard-admin.component';
import { SidebarAdminComponent } from './master/sidebar-admin/sidebar-admin.component';
import { VisualizarClienteComponent } from './master/clientes/visualizar-cliente/visualizar-cliente.component';
// import { TokenInterceptor } from './core/interceptors/token.interceptor';
// import { NovoAccessTokenInterceptor } from './core/interceptors/novo-access-token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ReceitasComponent,
    AdicionarReceitasComponent,
    EquipeComponent,
    LoginComponent,
    RelatoriosComponent,
    CadastrofuncionarioComponent,
    AlterarSenhaComponent,
    VisualizarReceitasComponent,
    EditarReceitaComponent,
    VendasComponent,
    NovaVendaComponent,
    AlterarVendaComponent,
    VisualizarUsuarioComponent,
    CadastroEstoqueComponent,
    EstoqueComponent,
    MovimentacaoEstoqueComponent,
    CancelarVendaComponent,
    DashboardCozinhaComponent,
    FinalizarVendaComponent,
    GestaoDeClientesComponent,
    CadastroClienteComponent,
    SidebarComponent,
    EditarUsuarioComponent,
    FinanceiroComponent,
    ExecucaoReceitaComponent,
    PedidosPendentesComponent,
    ButtonMenuComponent,
    PedidosAndamentoComponent,
    AtualizarEstoqueComponent,
    ConsultarEstoqueComponent,
    PedidosFinalizadosComponent,
    DashboardAdminComponent,
    SidebarAdminComponent,
    VisualizarClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: NovoAccessTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
