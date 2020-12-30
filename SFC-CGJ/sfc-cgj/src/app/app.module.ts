import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth/auth.module';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RelPendentesObrigacaoEventoComponent } from './components/rel-pendentes-obrigacao-evento/rel-pendentes-obrigacao-evento.component';
import { RelPendentesObrigacaoPeriodoComponent } from './components/rel-pendentes-obrigacao-periodo/rel-pendentes-obrigacao-periodo.component';
import { OpInspecionaObrigacaoComponent } from './components/op-inspeciona-obrigacao/op-inspeciona-obrigacao.component';
import { ManCartoriosComponent } from './components/man-cartorios/man-cartorios.component';
import { ManObrigacoesComponent } from './components/man-obrigacoes/man-obrigacoes.component';
import { ManOficiaisComponent } from './components/man-oficiais/man-oficiais.component';
import { ManCancelaEventoObrigacaoComponent } from './components/man-cancela-evento-obrigacao/man-cancela-evento-obrigacao.component';
import { ManAssociaOficiaisCartoriosComponent } from './components/man-associa-oficiais-cartorios/man-associa-oficiais-cartorios.component';
import { ManAssociaObrigacoesCartoriosComponent } from './components/man-associa-obrigacoes-cartorios/man-associa-obrigacoes-cartorios.component';
import { ManIncluiObrigacoesAnuaisComponent } from './components/man-inclui-obrigacoes-anuais/man-inclui-obrigacoes-anuais.component';
import { ConfigUsuariosCGJComponent } from './components/config-usuarios-cgj/config-usuarios-cgj.component';
import { ConfigEmailEventoValidadoComponent } from './components/config-email-evento-validado/config-email-evento-validado.component';
import { ConfigEmailEventoRejeitadoComponent } from './components/config-email-evento-rejeitado/config-email-evento-rejeitado.component';
import { ConfigConfiguraAnoCorrenteComponent } from './components/config-configura-ano-corrente/config-configura-ano-corrente.component';
import { ConfigLogRecuperaSenhaComponent } from './components/config-log-recupera-senha/config-log-recupera-senha.component';


@NgModule({
  declarations: [
    AppComponent,
    RelPendentesObrigacaoEventoComponent,
    RelPendentesObrigacaoPeriodoComponent,
    OpInspecionaObrigacaoComponent,
    ManCartoriosComponent,
    ManObrigacoesComponent,
    ManOficiaisComponent,
    ManCancelaEventoObrigacaoComponent,
    ManAssociaOficiaisCartoriosComponent,
    ManAssociaObrigacoesCartoriosComponent,
    ManIncluiObrigacoesAnuaisComponent,
    ConfigUsuariosCGJComponent,
    ConfigEmailEventoValidadoComponent,
    ConfigEmailEventoRejeitadoComponent,
    ConfigConfiguraAnoCorrenteComponent,
    ConfigLogRecuperaSenhaComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
