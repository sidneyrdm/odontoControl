import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { ListaServicosComponent } from './servicos/lista-servicos/lista-servicos.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'listaServico', component: ListaServicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
