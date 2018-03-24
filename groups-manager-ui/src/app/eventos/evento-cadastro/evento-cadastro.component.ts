import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';

import { ViacepService, Endereco, CepError } from '@brunoc/ngx-viacep';

import { ToastyService } from 'ng2-toasty';
import { Noticia } from '../../core/model';

@Component({
  selector: 'app-evento-cadastro',
  templateUrl: './evento-cadastro.component.html',
  styleUrls: ['./evento-cadastro.component.css']
})
export class EventoCadastroComponent implements OnInit {

  endereco: Endereco;
  noticia: Noticia;
  grupos: SelectItem[];
  ufs: SelectItem[];

  constructor(
    private viacepService: ViacepService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
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
    this.viacepService.buscarPorCep('73754012')
      .then((endereco: Endereco) => {
        console.log(endereco);
        this.toasty.success('Endereço encontrado no ViaCep');
      })
  }

}
