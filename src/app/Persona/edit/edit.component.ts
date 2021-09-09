import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/model/Pessoa';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar(); 
  }

  
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPessoaId(parseInt(""+id))
    .subscribe(data=>{
      this.pessoa=data;
    })

  }

  Atualizar(pessoa:Pessoa){
    this.service.updatePessoa(pessoa)
    .subscribe(data=> {
      this.pessoa = data;
      alert("Dados Atualizados com Sucesso!");
      this.router.navigate(["listar"]);
    })
  }

}
