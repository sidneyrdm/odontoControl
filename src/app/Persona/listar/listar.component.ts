import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/model/Pessoa';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

 'pessoas':Pessoa[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPessoas()
    .subscribe(data =>{
      this.pessoas = data;
    })
  }

  Editar(pessoa:Pessoa){
    localStorage.setItem("id", pessoa.id.toString());
    this.router.navigate(["edit"]);
  }

  Novo(){
    this.router.navigate(["add"]);
  }

  Deletar(pessoa:Pessoa){
    this.service.deletePessoa(pessoa)
    .subscribe(data=> {
      this.pessoas = this.pessoas.filter(p=> p !== pessoa);
      alert("Cliente "+pessoa.nome+" Deletado Com Sucesso!");
    })
  }

}
