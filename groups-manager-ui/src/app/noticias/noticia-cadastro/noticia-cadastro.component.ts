import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SelectItem } from 'primeng/api';

import { TopicoService } from '../../topicos/topico.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Noticia } from '../../core/model';

@Component({
  selector: 'app-noticia-cadastro',
  templateUrl: './noticia-cadastro.component.html',
  styleUrls: ['./noticia-cadastro.component.css']
})
export class NoticiaCadastroComponent implements OnInit {

  topicos = [];
  topicosSelecionados = [];
  grupos = [];
  corpoNoticia: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
  noticia = new Noticia();

  constructor(
    private topicoService: TopicoService,
    private errorHandler: ErrorHandlerService
  ) {
  }

  ngOnInit() {
    this.buscarTopicos();
    this.grupos = [
      { label: 'GAM', value: { id: 2, name: 'GAM' } },
      { label: 'Movimento', value: { id: 3, name: 'Movimento' } }
    ];
  }

  salvar(form: FormControl) {
    console.log(this.noticia);
  }

  buscarTopicos() {
    return this.topicoService.pesquisar()
      .then(topicos => {
        this.topicos = topicos.map(t => ({ label: t.descricao, value: t.descricao }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
