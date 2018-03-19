import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { GruposModule } from './grupos/grupos.module';
import { EventosModule } from './eventos/eventos.module';
import { IntegrantesModule } from './integrantes/integrantes.module';
import { NoticiasModule } from './noticias/noticias.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    EventosModule,
    GruposModule,
    IntegrantesModule,
    NoticiasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
