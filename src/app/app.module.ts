import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './gerencia/dashboard/dashboard.component';
import { AdicionarReceitasComponent } from './cozinha/adicionar-receitas/adicionar-receitas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EquipeComponent } from './gerencia/usuarios/equipe/equipe.component';
import { LoginComponent } from './login/login.component';
import { RelatoriosComponent } from './gerencia/relatorios/relatorios.component';
import { CadastrofuncionarioComponent } from './gerencia/usuarios/cadastrofuncionario/cadastrofuncionario.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { VisualizarReceitasComponent } from './cozinha/visualizar-receitas/visualizar-receitas.component';
import { EditarReceitaComponent } from './cozinha/editar-receita/editar-receita.component';
import { VendasComponent } from './venda/vendas/vendas.component';
import { NovaVendaComponent } from './venda/nova-venda/nova-venda.component';
import { AlterarVendaComponent } from './venda/alterar-venda/alterar-venda.component';
import { VisualizarUsuarioComponent } from './gerencia/usuarios/visualizar-usuario/visualizar-usuario.component';
import { CadastroEstoqueComponent } from './gerencia/estoque/cadastro-estoque/cadastro-estoque.component';
import { EstoqueComponent } from './gerencia/estoque/estoque/estoque.component';
import { MovimentacaoEstoqueComponent } from './gerencia/estoque/movimentacao-estoque/movimentacao-estoque.component';
import { CancelarVendaComponent } from './venda/cancelar-venda/cancelar-venda.component';
import { DashboardCozinhaComponent } from './cozinha/dashboard-cozinha/dashboard-cozinha.component';
import { FinalizarVendaComponent } from './venda/finalizar-venda/finalizar-venda.component';
import { GestaoDeClientesComponent } from './master/clientes/gestao-de-clientes/gestao-de-clientes.component';
import { CadastroClienteComponent } from './master/clientes/cadastro-cliente/cadastro-cliente.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditarUsuarioComponent } from './gerencia/usuarios/editar-usuario/editar-usuario.component';
import { FinanceiroComponent } from './gerencia/financeiro/financeiro.component';
import { ExecucaoReceitaComponent } from './cozinha/execucao-receita/execucao-receita.component';
import { PedidosPendentesComponent } from './cozinha/pedidos-pendentes/pedidos-pendentes.component';
import { ButtonMenuComponent } from './button-menu/button-menu.component';
import { PedidosAndamentoComponent } from './cozinha/pedidos-andamento/pedidos-andamento.component';
import { PedidosFinalizadosComponent } from './cozinha/pedidos-finalizados/pedidos-finalizados.component';
import { AtualizarEstoqueComponent } from './gerencia/estoque/atualizar-estoque/atualizar-estoque.component';
import { ConsultarEstoqueComponent } from './gerencia/estoque/consultar-estoque/consultar-estoque.component';
import { DashboardAdminComponent } from './master/dashboard-admin/dashboard-admin.component';
import { SidebarAdminComponent } from './master/sidebar-admin/sidebar-admin.component';
import { VisualizarClienteComponent } from './master/clientes/visualizar-cliente/visualizar-cliente.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { NovoAccessTokenInterceptor } from './core/interceptors/novo-access-token.interceptor';
import { ReceitasComponent } from './cozinha/receitas/receitas.component';


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
     { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: NovoAccessTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
