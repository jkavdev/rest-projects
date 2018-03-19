import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos-pesquisa',
  templateUrl: './grupos-pesquisa.component.html',
  styleUrls: ['./grupos-pesquisa.component.css']
})
export class GruposPesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  grupos: [
    { nome: 'Movimento', igreja: 'Catolica' },
    { nome: 'Gam', igreja: 'Merge' },
    { nome: 'Grupos', igreja: 'Santa' }
  ];

}