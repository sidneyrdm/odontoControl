import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Odonto';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }
  ListarServico(){
    this.router.navigate(["listaServico"]);
  }

  ListarAtendimentos(){
    this.router.navigate(["ListarAtendimentos"]);
  }

  ListarRelatorios(){
    alert('Vai te levar para a página de relatórios');
  }
  
}
