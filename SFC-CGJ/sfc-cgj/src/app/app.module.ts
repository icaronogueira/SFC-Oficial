import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth/auth.module';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RelPendentesObrigacaoEventoComponent } from './components/relatorios/rel-pendentes-obrigacao-evento/rel-pendentes-obrigacao-evento.component';
import { RelPendentesObrigacaoPeriodoComponent } from './components/relatorios/rel-pendentes-obrigacao-periodo/rel-pendentes-obrigacao-periodo.component';
import { OpInspecionaObrigacaoComponent } from './components/operacao/op-inspeciona-obrigacao/op-inspeciona-obrigacao.component';
import { ManCartoriosComponent } from './components/manutencao/man-cartorios/man-cartorios.component';
import { ManObrigacoesComponent } from './components/manutencao/man-obrigacoes/man-obrigacoes.component';
import { ManOficiaisComponent } from './components/manutencao/man-oficiais/man-oficiais.component';
import { ManCancelaEventoObrigacaoComponent } from './components/manutencao/man-cancela-evento-obrigacao/man-cancela-evento-obrigacao.component';
import { ManAssociaOficiaisCartoriosComponent } from './components/manutencao/man-associa-oficiais-cartorios/man-associa-oficiais-cartorios.component';
import { ManAssociaObrigacoesCartoriosComponent } from './components/manutencao/man-associa-obrigacoes-cartorios/man-associa-obrigacoes-cartorios.component';
import { ManIncluiObrigacoesAnuaisComponent } from './components/manutencao/man-inclui-obrigacoes-anuais/man-inclui-obrigacoes-anuais.component';
import { ConfigUsuariosCGJComponent, DialogDataExampleDialog } from './components/configuracao/config-usuarios-cgj/config-usuarios-cgj.component';
import { ConfigEmailEventoValidadoComponent } from './components/configuracao/config-email-evento-validado/config-email-evento-validado.component';
import { ConfigEmailEventoRejeitadoComponent } from './components/configuracao/config-email-evento-rejeitado/config-email-evento-rejeitado.component';
import { ConfigConfiguraAnoCorrenteComponent } from './components/configuracao/config-configura-ano-corrente/config-configura-ano-corrente.component';
import { ConfigLogRecuperaSenhaComponent } from './components/configuracao/config-log-recupera-senha/config-log-recupera-senha.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { EmailEditorModule } from 'angular-email-editor';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ManIncluirCartorioComponent } from './components/manutencao/man-incluir-cartorio/man-incluir-cartorio.component';
import { ManConsultarEditarCartorioComponent } from './components/manutencao/man-consultar-editar-cartorio/man-consultar-editar-cartorio.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

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
    ConfigLogRecuperaSenhaComponent,

    DialogDataExampleDialog,

    ManIncluirCartorioComponent,

    ManConsultarEditarCartorioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    Ng2SmartTableModule,
    MatDialogModule,
    EmailEditorModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
