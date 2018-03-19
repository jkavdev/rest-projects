import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrante-pesquisa',
  templateUrl: './integrante-pesquisa.component.html',
  styleUrls: ['./integrante-pesquisa.component.css']
})
export class IntegrantePesquisaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  integrantes = [
    { nome: 'Jhonatan', celular: '12345678', membroDaIgreja: "true", outraIgreja: "", cadastroEfetivado: "false" },
    { nome: 'Lucas', celular: '12345678', membroDaIgreja: "false", outraIgreja: "Catolica de Santos", cadastroEfetivado: "false" },
    { nome: 'Dougals', celular: '12345678', membroDaIgreja: "true", outraIgreja: "", cadastroEfetivado: "false" }
  ];

}
