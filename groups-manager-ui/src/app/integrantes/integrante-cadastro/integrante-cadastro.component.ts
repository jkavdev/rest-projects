import { Component, OnInit } from '@angular/core';
import { Integrante } from '../../core/model';
import { SelectItem } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { IntegranteService } from '../integrante.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-integrante-cadastro',
  templateUrl: './integrante-cadastro.component.html',
  styleUrls: ['./integrante-cadastro.component.css']
})
export class IntegranteCadastroComponent implements OnInit {

  integrante = new Integrante();
  sexos: SelectItem[];

  constructor(
    private integranteService: IntegranteService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.sexos = [];
    this.sexos.push({ title: 'Masculino', value: 'MASCULINO', icon: 'fa fa-mars' });
    this.sexos.push({ title: 'Feminino', value: 'FEMININO', icon: 'fa fa-venus' });
  }

  salvar(form: FormControl) {
    console.log(this.integrante)
  }

  validar(cpf: string) {
    console.log(cpf)
    this.integranteService.validar(cpf)
      .then(() => {
        this.toasty.success(`${cpf} válido`)
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
