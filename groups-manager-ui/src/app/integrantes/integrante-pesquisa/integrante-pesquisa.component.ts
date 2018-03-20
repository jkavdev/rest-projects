import { Component, OnInit } from '@angular/core';
import { IntegranteService } from '../integrante.service';

@Component({
  selector: 'app-integrante-pesquisa',
  templateUrl: './integrante-pesquisa.component.html',
  styleUrls: ['./integrante-pesquisa.component.css']
})
export class IntegrantePesquisaComponent implements OnInit {

  nome: string;
  grupo: string;
  integrantes = [];

  constructor(private integranteService: IntegranteService) {
  }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.integranteService.pesquisar({ nome: this.nome, grupo: this.grupo })
      .then(integrantes => this.integrantes = integrantes);
  }

}
