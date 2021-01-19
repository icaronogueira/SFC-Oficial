import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { ConfigConfiguraAnoCorrenteComponent } from './components/configuracao/config-configura-ano-corrente/config-configura-ano-corrente.component';
import { ConfigEmailEventoRejeitadoComponent } from './components/configuracao/config-email-evento-rejeitado/config-email-evento-rejeitado.component';
import { ConfigEmailEventoValidadoComponent } from './components/configuracao/config-email-evento-validado/config-email-evento-validado.component';
import { ConfigLogRecuperaSenhaComponent } from './components/configuracao/config-log-recupera-senha/config-log-recupera-senha.component';
import { ConfigUsuariosCGJComponent } from './components/configuracao/config-usuarios-cgj/config-usuarios-cgj.component';
import { MainComponent } from './components/main/main.component';
import { ManAssociaObrigacoesCartoriosComponent } from './components/manutencao/man-associa-obrigacoes-cartorios/man-associa-obrigacoes-cartorios.component';
import { ManAssociaOficiaisCartoriosComponent } from './components/manutencao/man-associa-oficiais-cartorios/man-associa-oficiais-cartorios.component';
import { ManCancelaEventoObrigacaoComponent } from './components/manutencao/man-cancela-evento-obrigacao/man-cancela-evento-obrigacao.component';
import { ManCartoriosComponent } from './components/manutencao/man-cartorios/man-cartorios.component';
import { ManConsultarEditarCartorioComponent } from './components/manutencao/man-consultar-editar-cartorio/man-consultar-editar-cartorio.component';
import { ManIncluiObrigacoesAnuaisComponent } from './components/manutencao/man-inclui-obrigacoes-anuais/man-inclui-obrigacoes-anuais.component';
import { ManIncluirCartorioComponent } from './components/manutencao/man-incluir-cartorio/man-incluir-cartorio.component';
import { ManObrigacoesComponent } from './components/manutencao/man-obrigacoes/man-obrigacoes.component';
import { ManOficiaisComponent } from './components/manutencao/man-oficiais/man-oficiais.component';
import { OpInspecionaObrigacaoComponent } from './components/operacao/op-inspeciona-obrigacao/op-inspeciona-obrigacao.component';
import { RelPendentesObrigacaoEventoComponent } from './components/relatorios/rel-pendentes-obrigacao-evento/rel-pendentes-obrigacao-evento.component';
import { RelPendentesObrigacaoPeriodoComponent } from './components/relatorios/rel-pendentes-obrigacao-periodo/rel-pendentes-obrigacao-periodo.component';

const routerConfig: Routes = [
  {path: 'rel-pend-obg-evento', component: RelPendentesObrigacaoEventoComponent},
  {path: 'rel-pend-obg-periodo', component: RelPendentesObrigacaoPeriodoComponent},
  {path: 'op-inspeciona-obrigacao', component: OpInspecionaObrigacaoComponent},
  {path: 'man-incluir-cartorios', component: ManIncluirCartorioComponent},
  {path: 'man-consultar-editar-cartorios', component: ManConsultarEditarCartorioComponent},
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
  imports: [RouterModule.forRoot(routerConfig, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forRoot: any;
}
