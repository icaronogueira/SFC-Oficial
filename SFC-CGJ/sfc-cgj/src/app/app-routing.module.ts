import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { ConfigConfiguraAnoCorrenteComponent } from './components/config-configura-ano-corrente/config-configura-ano-corrente.component';
import { ConfigEmailEventoRejeitadoComponent } from './components/config-email-evento-rejeitado/config-email-evento-rejeitado.component';
import { ConfigEmailEventoValidadoComponent } from './components/config-email-evento-validado/config-email-evento-validado.component';
import { ConfigLogRecuperaSenhaComponent } from './components/config-log-recupera-senha/config-log-recupera-senha.component';
import { ConfigUsuariosCGJComponent } from './components/config-usuarios-cgj/config-usuarios-cgj.component';
import { MainComponent } from './components/main/main.component';
import { ManAssociaObrigacoesCartoriosComponent } from './components/man-associa-obrigacoes-cartorios/man-associa-obrigacoes-cartorios.component';
import { ManAssociaOficiaisCartoriosComponent } from './components/man-associa-oficiais-cartorios/man-associa-oficiais-cartorios.component';
import { ManCancelaEventoObrigacaoComponent } from './components/man-cancela-evento-obrigacao/man-cancela-evento-obrigacao.component';
import { ManCartoriosComponent } from './components/man-cartorios/man-cartorios.component';
import { ManIncluiObrigacoesAnuaisComponent } from './components/man-inclui-obrigacoes-anuais/man-inclui-obrigacoes-anuais.component';
import { ManObrigacoesComponent } from './components/man-obrigacoes/man-obrigacoes.component';
import { ManOficiaisComponent } from './components/man-oficiais/man-oficiais.component';
import { OpInspecionaObrigacaoComponent } from './components/op-inspeciona-obrigacao/op-inspeciona-obrigacao.component';
import { RelPendentesObrigacaoEventoComponent } from './components/rel-pendentes-obrigacao-evento/rel-pendentes-obrigacao-evento.component';
import { RelPendentesObrigacaoPeriodoComponent } from './components/rel-pendentes-obrigacao-periodo/rel-pendentes-obrigacao-periodo.component';

const routerConfig: Routes = [
  {path: 'rel-pend-obg-evento', component: RelPendentesObrigacaoEventoComponent},
  {path: 'rel-pend-obg-periodo', component: RelPendentesObrigacaoPeriodoComponent},
  {path: 'op-inspeciona-obrigacao', component: OpInspecionaObrigacaoComponent},
  {path: 'man-cartorios', component: ManCartoriosComponent},
  {path: 'man-obrigacoes', component: ManObrigacoesComponent},
  {path: 'man-oficiais', component: ManOficiaisComponent},
  {path: 'man-cancela-evento-obrigacao', component: ManCancelaEventoObrigacaoComponent},
  {path: 'man-associa-oficiais-cartorios', component: ManAssociaOficiaisCartoriosComponent},
  {path: 'man-associa-obrigacoes-cartorios', component: ManAssociaObrigacoesCartoriosComponent},
  {path: 'man-inclui-obrigacoes-anuais', component: ManIncluiObrigacoesAnuaisComponent},
  {path: 'config-usuarios-cgj', component: ConfigUsuariosCGJComponent},
  {path: 'config-email-evento-validado', component: ConfigEmailEventoValidadoComponent},
  {path: 'config-email-evento-rejeitado', component: ConfigEmailEventoRejeitadoComponent},
  {path: 'config-configura-ano-corrente', component: ConfigConfiguraAnoCorrenteComponent},
  {path: 'config-log-recupera-senha', component: ConfigLogRecuperaSenhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forRoot: any;
}
