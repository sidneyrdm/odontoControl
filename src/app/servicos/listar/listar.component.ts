import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/model/Servico';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  'servicos': Servico[];
  'servico1': Servico = new Servico();
  'servico2': Servico = new Servico();


  constructor(private router:Router) {
    this.servico1.id = 1;
    this.servico1.descricao = "Serviço 1"
    this.servico1.valor = 25;

    this.servico1.id = 2;
    this.servico1.descricao = "Serviço 2"
    this.servico1.valor = 40;
  }

  ngOnInit(): void {
    this.servicos.push(this.servico1, this.servico2);
  }

  Editar(servico: Servico) {
    alert("o serviço "+servico.descricao+" será editado!");
  }

  Excluir(servico: Servico) {
    alert("o serviço "+servico.descricao+" será excluído!");
  }


}
