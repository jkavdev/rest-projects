import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-evento-cadastro',
  templateUrl: './evento-cadastro.component.html',
  styleUrls: ['./evento-cadastro.component.css']
})
export class EventoCadastroComponent implements OnInit {

  constructor() {
    this.grupos = [
      { label: 'Selecione o Grupo', value: null },
      { label: 'GAM', value: 1 },
      { label: 'Movimento', value: 2 }
    ]
    this.ufs = [
      { label: 'Selecione o Estado', value: null },
      { label: 'GO', value: 1 },
      { label: 'DF', value: 2 }
    ]
  }

  ngOnInit() {
  }

  grupos: SelectItem[];
  ufs: SelectItem[];

}
