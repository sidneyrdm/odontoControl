import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/Cliente';
import { Servico } from '../model/Servico';
import { Atendimento } from '../model/Atendimento';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient ) { }

  Url = 'http://localhost:8080/clientes';
  UrlServico = 'http://localhost:8080/servicos';
  UrlAtendimento = 'http://localhost:8080/atendimentos';

  getServicos(){
    return this.http.get<Servico[]>(this.UrlServico);
  }

  getAtendimentos(){
    return this.http.get<Atendimento[]>(this.UrlAtendimento);
  }

  getClientes(){
    return this.http.get<Cliente[]>(this.Url);
  }

  createCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.Url, cliente);
  }

  createServico(servico: Servico){
    return this.http.post<Servico>(this.UrlServico, servico);
  }

  createAtendimento(atendimento: Atendimento){
    return this.http.post<Atendimento>(this.UrlAtendimento, atendimento);
  }

  getClienteId(id:number){
    return this.http.get<Cliente>(this.Url+"/"+id);
  }

  getServicoId(id:number){
    return this.http.get<Servico>(this.UrlServico+"/"+id);
  }

  getAtendimentoId(id:number){
    return this.http.get<Atendimento>(this.UrlAtendimento+"/"+id);
  }

  updateCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.Url+"/"+cliente.id, cliente);
  }

  updateServico(servico:Servico){
    return this.http.put<Servico>(this.UrlServico+"/"+servico.id, servico);
  }

  updateAtendimento(atendimento:Atendimento){
    return this.http.put<Atendimento>(this.UrlAtendimento+"/"+atendimento.id, atendimento);
  }

  deleteCliente(cliente:Cliente){
    return this.http.delete<Cliente>(this.Url+"/"+cliente.id);
  }

  deleteServico(servico:Servico){
    return this.http.delete<Servico>(this.UrlServico+"/"+servico.id);
  }

  deleteAtendimento(atendimento:Atendimento){
    return this.http.delete<Servico>(this.UrlAtendimento+"/"+atendimento.id);
  }
}
