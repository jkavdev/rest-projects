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

  grupos = [];

  pesquisar() {
    this.grupoService.pesquisar()
      .then(grupos => this.grupos = grupos);
  }

}
