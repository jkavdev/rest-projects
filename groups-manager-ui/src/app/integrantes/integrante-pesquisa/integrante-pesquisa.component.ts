import { Component, OnInit } from '@angular/core';

import { IntegranteService, IntegranteFiltro } from '../integrante.service';

@Component({
  selector: 'app-integrante-pesquisa',
  templateUrl: './integrante-pesquisa.component.html',
  styleUrls: ['./integrante-pesquisa.component.css']
})
export class IntegrantePesquisaComponent implements OnInit {

  filtro = new IntegranteFiltro();
  integrantes = [];

  constructor(private integranteService: IntegranteService) {
  }

  ngOnInit() {
  }

  pesquisar() {
    this.integranteService.pesquisar(this.filtro)
      .then(integrantes => this.integrantes = integrantes);
  }

}
