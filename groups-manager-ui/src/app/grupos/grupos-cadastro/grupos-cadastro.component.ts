import { Component, OnInit } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { GrupoService } from '../grupo.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Grupo } from '../../core/model';

@Component({
  selector: 'app-grupos-cadastro',
  templateUrl: './grupos-cadastro.component.html',
  styleUrls: ['./grupos-cadastro.component.css']
})
export class GruposCadastroComponent implements OnInit {

  grupo = new Grupo();

  constructor(
    private grupoService: GrupoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.grupoService.salvar(this.grupo)
      .then(() => {
        this.toasty.success('Grupo adicionado!');

        form.reset();
        this.grupo = new Grupo();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
