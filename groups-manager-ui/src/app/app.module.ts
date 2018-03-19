import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { GruposPesquisaComponent } from './grupos-pesquisa/grupos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntegrantePesquisaComponent } from './integrante-pesquisa/integrante-pesquisa.component';
import { GruposCadastroComponent } from './grupos-cadastro/grupos-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    GruposPesquisaComponent,
    NavbarComponent,
    IntegrantePesquisaComponent,
    GruposCadastroComponent
  ],
  imports: [
    BrowserModule,
    CurrencyMaskModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
