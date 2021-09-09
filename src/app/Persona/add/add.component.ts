import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/model/Pessoa';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Salvar(){
    this.service.createPessoa(this.pessoa)
    .subscribe(data=> {
      alert("Cliente Cadastrado com Sucesso!");
      this.router.navigate(["listar"]);
    })
  }

  teste(){
    alert("Cliclou no botão de Teste");
  }

}
