import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SelectItem } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';
import { ViacepService, Endereco, CepError } from '@brunoc/ngx-viacep';
import { ToastyService } from 'ng2-toasty';

import { Noticia, Evento } from '../../core/model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-cadastro',
  templateUrl: './evento-cadastro.component.html',
  styleUrls: ['./evento-cadastro.component.css']
})
export class EventoCadastroComponent implements OnInit {

  grupos = [];
  ufs = [];
  endereco: Endereco;
  evento = new Evento();

  constructor(
    private viacepService: ViacepService,
    private eventoService: EventoService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.grupos = [
      { label: 'GAM', value: 1 },
      { label: 'Movimento', value: 2 }
    ]
    this.ufs = [
      { label: 'GO', value: 1 },
      { label: 'DF', value: 2 }
    ]
  }

  salvar(form: FormControl) {
    this.eventoService.salvar(this.evento)
      .then(() => {
        this.toasty.success('Evento salvo!')
      })
  }

  buscarEndereco(cep: string) {
    this.viacepService.buscarPorCep(cep)
      .then((endereco: Endereco) => {

        this.evento.endereco.bairro = endereco.bairro;
        this.evento.endereco.cep = endereco.cep;
        this.evento.endereco.complemento = endereco.complemento;
        this.evento.endereco.uf = endereco.uf;
        this.evento.endereco.logradouro = endereco.logradouro;
        this.evento.endereco.localidade = endereco.localidade;
        this.evento.endereco.unidade = endereco.unidade;

        this.toasty.success('Endereço encontrado no ViaCep');
      })
  }

}
