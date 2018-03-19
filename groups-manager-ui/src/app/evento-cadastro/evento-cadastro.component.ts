import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-cadastro',
  templateUrl: './evento-cadastro.component.html',
  styleUrls: ['./evento-cadastro.component.css']
})
export class EventoCadastroComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  grupos: [
    { label: 'Selecione o Grupo', value: null },
    { label: 'GAM', value: 1 },
    { label: 'Movimento', value: 2 }
  ]
  UFs: [
    { label: 'Selecione o Estado', value: null },
    { label: 'GO', value: 1 },
    { label: 'DF', value: 2 }
  ]

}
