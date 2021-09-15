import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atendimento } from 'src/app/model/Atendimento';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-adicionar-atendimento',
  templateUrl: './adicionar-atendimento.component.html',
  styleUrls: ['./adicionar-atendimento.component.css']
})
export class AdicionarAtendimentoComponent implements OnInit {
  atendimento: Atendimento = new Atendimento();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  SalvarAtendimento(){
    this.service.createAtendimento(this.atendimento)
    .subscribe(data=> {
      alert("Atendimento Cadastrado com Sucesso!");
      this.router.navigate(["ListarAtendimentos"]);
    })
  }
}
