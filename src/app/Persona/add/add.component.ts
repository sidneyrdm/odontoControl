import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Salvar(){
    this.service.createCliente(this.cliente)
    .subscribe(data=> {
      alert("Cliente Cadastrado com Sucesso!");
      this.router.navigate(["listar"]);
    })
  }

  teste(){
    alert("Cliclou no botão de Teste");
  }

}
