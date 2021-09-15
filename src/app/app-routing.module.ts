import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarAtendimentoComponent } from './Atendimentos/adicionar-atendimento/adicionar-atendimento.component';
import { ListarAtendimentoComponent } from './Atendimentos/listar-atendimento/listar-atendimento.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AdicionaservicoComponent } from './servicos/adicionaservico/adicionaservico.component';
import { EditaServicoComponent } from './servicos/edita-servico/edita-servico.component';
import { ListaServicosComponent } from './servicos/lista-servicos/lista-servicos.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'listaServico', component: ListaServicosComponent},
  {path: 'adicionaservico', component: AdicionaservicoComponent},
  {path: 'edita-servico', component: EditaServicoComponent},
  {path: 'ListarAtendimentos', component: ListarAtendimentoComponent},
  {path: 'adicionarAtendimento', component: AdicionarAtendimentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
