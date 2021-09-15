import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar(); 
  }

  
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getClienteId(parseInt(""+id))
    .subscribe(data=>{
      this.cliente=data;
    })

  }

  Atualizar(cliente:Cliente){
    this.service.updateCliente(cliente)
    .subscribe(data=> {
      this.cliente = data;
      alert("Dados Atualizados com Sucesso!");
      this.router.navigate(["listar"]);
    })
  }

}
