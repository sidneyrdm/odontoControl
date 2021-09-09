import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/model/Servico';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.css']
})
export class ListaServicosComponent implements OnInit {

  'servicos': Servico[];

  constructor(private service:ServiceService, private router:Router) {
  }

  ngOnInit(): void {
    this.service.getServicos()
    .subscribe(data =>{
      this.servicos = data;
    })
  }

  Editar(servico: Servico) {
    alert("o serviço "+servico.descricao+" será editado!");
  }

  Excluir(servico: Servico) {
    alert("o serviço "+servico.descricao+" será excluído!");
  }

  NovoServico(){
    alert("Cadastrar um novo Serviço");
  }
}
