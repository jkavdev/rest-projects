import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SpinnerModule } from 'primeng/spinner';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';

import { AppComponent } from './app.component';
import { GruposPesquisaComponent } from './grupos-pesquisa/grupos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntegrantePesquisaComponent } from './integrante-pesquisa/integrante-pesquisa.component';
import { GruposCadastroComponent } from './grupos-cadastro/grupos-cadastro.component';
import { EventoCadastroComponent } from './evento-cadastro/evento-cadastro.component';
import { NoticiaCadastroComponent } from './noticia-cadastro/noticia-cadastro.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    GruposPesquisaComponent,
    NavbarComponent,
    IntegrantePesquisaComponent,
    GruposCadastroComponent,
    EventoCadastroComponent,
    NoticiaCadastroComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CurrencyMaskModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextModule,
    InputTextareaModule,
    SpinnerModule,
    DropdownModule,
    EditorModule,
    MultiSelectModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
