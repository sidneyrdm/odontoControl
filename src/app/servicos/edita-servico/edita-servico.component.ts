import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/model/Servico';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edita-servico',
  templateUrl: './edita-servico.component.html',
  styleUrls: ['./edita-servico.component.css']
})
export class EditaServicoComponent implements OnInit {

  servico: Servico = new Servico();

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar(); 
  }

  
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getServicoId(parseInt(""+id))
    .subscribe(data=>{
      this.servico=data;
    })

  }

  AtualizarServico(servico:Servico){
    this.service.updateServico(servico)
    .subscribe(data=> {
      this.servico = data;
      alert("Dados Atualizados com Sucesso!");
      this.router.navigate(["listaServico"]);
    })
  }

}
