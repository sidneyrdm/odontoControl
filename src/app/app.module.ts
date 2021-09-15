import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaServicosComponent } from './servicos/lista-servicos/lista-servicos.component';
import { AdicionaservicoComponent } from './servicos/adicionaservico/adicionaservico.component';
import { EditaServicoComponent } from './servicos/edita-servico/edita-servico.component';
import { ListarAtendimentoComponent } from './Atendimentos/listar-atendimento/listar-atendimento.component';
import { AdicionarAtendimentoComponent } from './Atendimentos/adicionar-atendimento/adicionar-atendimento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListaServicosComponent,
    AdicionaservicoComponent,
    EditaServicoComponent,
    ListarAtendimentoComponent,
    AdicionarAtendimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
