import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-noticia-cadastro',
  templateUrl: './noticia-cadastro.component.html',
  styleUrls: ['./noticia-cadastro.component.css']
})
export class NoticiaCadastroComponent {

  topicos: SelectItem[];
  grupos: SelectItem[];
  corpoNoticia: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  constructor() {
    this.topicos = [
      { label: 'Mundo', value: { id: 2, name: 'Mundo' } },
      { label: 'Negócios', value: { id: 3, name: 'Negócios' } },
      { label: 'Entreterimento', value: { id: 4, name: 'Entreterimento' } }
    ];
    this.grupos = [
      { label: 'GAM', value: { id: 2, name: 'GAM' } },
      { label: 'Movimento', value: { id: 3, name: 'Movimento' } }
    ];
  }


}
