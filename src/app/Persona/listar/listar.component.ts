import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

 'clientes':Cliente[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(data =>{
      this.clientes = data;
    })
  }

  Editar(cliente:Cliente){
    localStorage.setItem("id", cliente.id.toString());
    this.router.navigate(["edit"]);
  }

  Novo(){
    this.router.navigate(["add"]);
  }

  Deletar(cliente:Cliente){
    this.service.deleteCliente(cliente)
    .subscribe(data=> {
      this.clientes = this.clientes.filter(p=> p !== cliente);
      alert("Cliente "+cliente.nome+" Deletado Com Sucesso!");
    })
  }

}
