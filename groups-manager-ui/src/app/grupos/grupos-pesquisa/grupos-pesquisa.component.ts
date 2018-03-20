import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../grupo.service';

@Component({
  selector: 'app-grupos-pesquisa',
  templateUrl: './grupos-pesquisa.component.html',
  styleUrls: ['./grupos-pesquisa.component.css']
})
export class GruposPesquisaComponent implements OnInit {

  constructor(private grupoService: GrupoService) {
  }

  ngOnInit() {
    this.pesquisar();
  }

  nome: string;
  grupos = [];

  pesquisar() {
    this.grupoService.pesquisar({ nome: this.nome })
      .then(grupos => this.grupos = grupos);
  }

}
