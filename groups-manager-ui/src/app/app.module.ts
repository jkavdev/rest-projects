import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { GruposModule } from './grupos/grupos.module';
import { EventosModule } from './eventos/eventos.module';
import { IntegrantesModule } from './integrantes/integrantes.module';
import { NoticiasModule } from './noticias/noticias.module';
import { HttpModule } from '@angular/http';
import { GrupoService } from './grupos/grupo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    CoreModule,
    EventosModule,
    GruposModule,
    IntegrantesModule,
    NoticiasModule
  ],
  providers: [GrupoService],
  bootstrap: [AppComponent],
  exports: [
    
  ]
})
export class AppModule { }
