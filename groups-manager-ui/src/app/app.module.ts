import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GruposModule } from './grupos/grupos.module';
import { EventosModule } from './eventos/eventos.module';
import { IntegrantesModule } from './integrantes/integrantes.module';
import { NoticiasModule } from './noticias/noticias.module';

import { GrupoService } from './grupos/grupo.service';
import { IntegranteService } from './integrantes/integrante.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,

    CoreModule,
    EventosModule,
    GruposModule,
    IntegrantesModule,
    NoticiasModule
  ],
  providers: [
    ConfirmationService,
    GrupoService,
    IntegranteService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
