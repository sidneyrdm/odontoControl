import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/model/Servico';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-adicionaservico',
  templateUrl: './adicionaservico.component.html',
  styleUrls: ['./adicionaservico.component.css']
})
export class AdicionaservicoComponent implements OnInit {

  servico: Servico = new Servico();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  SalvarServico(){
    this.service.createServico(this.servico)
    .subscribe(data=> {
      alert("Serviço Cadastrado com Sucesso!");
      this.router.navigate(["listaServico"]);
    })
  }

}
