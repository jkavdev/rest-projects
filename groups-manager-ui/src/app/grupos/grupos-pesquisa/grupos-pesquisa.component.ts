import { Component, OnInit } from '@angular/core';

import { GrupoService, GrupoFiltro } from '../grupo.service';

@Component({
  selector: 'app-grupos-pesquisa',
  templateUrl: './grupos-pesquisa.component.html',
  styleUrls: ['./grupos-pesquisa.component.css']
})
export class GruposPesquisaComponent implements OnInit {

  filtro = new GrupoFiltro();
  grupos = [];

  constructor(private grupoService: GrupoService) {
  }

  ngOnInit() {
  }

  pesquisar() {
    this.grupoService.pesquisar(this.filtro)
      .then(grupos => this.grupos = grupos);
  }

  excluir(grupo: any) {
    this.grupoService.excluir(grupo.id)
      .then(() => {
        this.pesquisar();
      })
  }

}
