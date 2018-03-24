import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastyModule } from 'ng2-toasty';

import { ViacepModule } from '@brunoc/ngx-viacep';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { GrupoService } from '../grupos/grupo.service';
import { IntegranteService } from '../integrantes/integrante.service';
import { TopicoService } from '../topicos/topico.service';
import { NoticiaService } from '../noticias/noticia.service';
import { EventoService } from '../eventos/evento.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
    ViacepModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    ConfirmationService,
    ErrorHandlerService,
    GrupoService,
    IntegranteService,
    TopicoService,
    NoticiaService,
    EventoService
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
