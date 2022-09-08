import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/pages/login/login.component';
import { GerenciaComponent } from './components/pages/gerencia/gerencia/gerencia.component';
import { AdminComponent } from './components/pages/admin/admin/admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { CadastroAdminComponent } from './components/pages/admin/cadastro-admin/cadastro-admin.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { NovoAccessTokenInterceptor } from './core/interceptors/novo-access-token.interceptor';
import { GestaoDeClientesComponent } from './components/pages/admin/clientes/clientes/clientes.component';
import { CadastroClienteComponent } from './components/pages/admin/clientes/cadastro-cliente/cadastro-cliente.component';
import { PhonePipe } from './core/pipes/phone.pipe';
import { CpfPipe } from './core/pipes/cpf.pipe';
import { OnlyNumbersDirective } from './core/directive/only-numbers.directive';
import { CadastroRepresentanteComponent } from './components/pages/admin/clientes/cadastro-representante/cadastro-representante.component';
import { CnpjPipe } from './core/pipes/cnpj.pipe';
import { VendasComponent } from './components/pages/vendas/vendas/vendas.component';
import { NovaVendaComponent } from './components/pages/vendas/nova-venda/nova-venda.component';
import { VisualizarVendaComponent } from './components/pages/vendas/visualizar-venda/visualizar-venda.component';
import { CancelarVendaComponent } from './components/pages/vendas/cancelar-venda/cancelar-venda.component';
import { FinalizarVendaComponent } from './components/pages/vendas/finalizar-venda/finalizar-venda.component';
import { CozinhaComponent } from './components/pages/cozinha/cozinha/cozinha.component';
import { PedidosPendentesComponent } from './components/pages/cozinha/pedidos-pendentes/pedidos-pendentes.component';
import { PedidosAndamentoComponent } from './components/pages/cozinha/pedidos-andamento/pedidos-andamento.component';
import { PedidosFinalizadosComponent } from './components/pages/cozinha/pedidos-finalizados/pedidos-finalizados.component';
import { ReceitasComponent } from './components/pages/cozinha/receitas/receitas.component';
import { ExecucaoReceitaComponent } from './components/pages/cozinha/execucao-receita/execucao-receita.component';
import { VisualizarReceitaComponent } from './components/pages/cozinha/visualizar-receita/visualizar-receita.component';
import { EditarReceitaComponent } from './components/pages/cozinha/editar-receita/editar-receita.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';
import { EquipeComponent } from './components/pages/gerencia/usuarios/equipe/equipe.component';
import { VisualizarUsuarioComponent } from './components/pages/gerencia/usuarios/visualizar-usuario/visualizar-usuario.component';
import { EditarUsuarioComponent } from './components/pages/gerencia/usuarios/editar-usuario/editar-usuario.component';
import { CadastrarUsuarioComponent } from './components/pages/gerencia/usuarios/cadastrar-usuario/cadastrar-usuario.component';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    GerenciaComponent,
    AdminComponent,
    SidebarComponent,
    SidebarAdminComponent,
    CadastroAdminComponent,
    GestaoDeClientesComponent,
    CadastroClienteComponent,
    PhonePipe,
    CpfPipe,
    OnlyNumbersDirective,
    CadastroRepresentanteComponent,
    CnpjPipe,
    VendasComponent,
    NovaVendaComponent,
    VisualizarVendaComponent,
    CancelarVendaComponent,
    FinalizarVendaComponent,
    CozinhaComponent,
    PedidosPendentesComponent,
    PedidosAndamentoComponent,
    PedidosFinalizadosComponent,
    ReceitasComponent,
    ExecucaoReceitaComponent,
    VisualizarReceitaComponent,
    EditarReceitaComponent,
    ButtonMenuComponent,
    EquipeComponent,
    VisualizarUsuarioComponent,
    EditarUsuarioComponent,
    CadastrarUsuarioComponent,
    EstoqueComponent,
    CadastroEstoqueComponent,
    MovimentacaoEstoqueComponent,
    ConsultarEstoqueComponent,
    CadastrarReceitaComponent,
    MovimentarMateriaPrimaComponent,
    MovimentarProdutosAcabadosComponent,
    ConsultarMateriaPrimaComponent,
    ConsultarProdutosAcabadosComponent,
    FinanceiroComponent,
    RelatoriosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NovoAccessTokenInterceptor, multi: true },

],
  bootstrap: [AppComponent]
})
export class AppModule { }
