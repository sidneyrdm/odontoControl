import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atendimento } from 'src/app/model/Atendimento';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrls: ['./listar-atendimento.component.css']
})
export class ListarAtendimentoComponent implements OnInit {

  'atendimentos' : Atendimento[];

  constructor(private service:ServiceService, private router:Router) {
  }

  ngOnInit(): void {
    this.service.getAtendimentos()
    .subscribe(data =>{
      this.atendimentos = data;
    })
  }

  
  EditarAtendimento(atendimento:Atendimento){
    localStorage.setItem("id", atendimento.id.toString());
    this.router.navigate(["edita-servico"]);
  }

  
  DeletarAtendimento(atendimento:Atendimento){
    this.service.deleteAtendimento(atendimento)
    .subscribe(data=> {
      this.atendimentos = this.atendimentos.filter(p=> p !== atendimento);
      alert("Atendimento do cliente "+atendimento.nomeCliente+" Deletado Com Sucesso!");
    })
  }

  
  NovoAtendimento(){
    this.router.navigate(["adicionarAtendimento"]);
  }
}
