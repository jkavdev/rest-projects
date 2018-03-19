import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos-pesquisa',
  templateUrl: './grupos-pesquisa.component.html',
  styleUrls: ['./grupos-pesquisa.component.css']
})
export class GruposPesquisaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  grupos = [
    { nome: 'GAM', igreja: "Católica" },
    { nome: 'Movimento', igreja: "Pentencostal" }
  ];

}
