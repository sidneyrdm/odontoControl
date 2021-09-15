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

  Editar(servico:Servico){
    localStorage.setItem("id", servico.id.toString());
    this.router.navigate(["edita-servico"]);
  }

  Deletar(servico:Servico){
    this.service.deleteServico(servico)
    .subscribe(data=> {
      this.servicos = this.servicos.filter(p=> p !== servico);
      alert("Serviço "+servico.descricao+" Deletado Com Sucesso!");
    })
  }

  NovoServico(){
    this.router.navigate(["adicionaservico"]);
  }
}
