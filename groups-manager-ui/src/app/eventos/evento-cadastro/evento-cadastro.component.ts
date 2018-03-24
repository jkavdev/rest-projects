import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';

import { ViacepService, Endereco, CepError } from '@brunoc/ngx-viacep';

import { ToastyService } from 'ng2-toasty';
import { Noticia, Evento } from '../../core/model';
import { EventoService } from '../evento.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-evento-cadastro',
  templateUrl: './evento-cadastro.component.html',
  styleUrls: ['./evento-cadastro.component.css']
})
export class EventoCadastroComponent implements OnInit {

  grupos: SelectItem[];
  ufs: SelectItem[];
  endereco: Endereco;
  evento = new Evento();
  
  constructor(
    private viacepService: ViacepService,
    private eventoService: EventoService,
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

  salvar(form: FormControl) {
    console.log(this.evento)
    this.eventoService.salvar(this.evento)
      .then(() => {
        this.toasty.success('Evento salvo!')
      })
  }

}
