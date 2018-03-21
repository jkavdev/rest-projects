import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';

import { SharedModule } from '../shared/shared.module';

import { GruposCadastroComponent } from './grupos-cadastro/grupos-cadastro.component';
import { GruposPesquisaComponent } from './grupos-pesquisa/grupos-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,

    ButtonModule,
    DataTableModule,
    InputTextModule,
    InputTextareaModule,
    TooltipModule,

    SharedModule
  ],
  declarations: [
    GruposCadastroComponent,
    GruposPesquisaComponent
  ],
  exports: [
    GruposCadastroComponent,
    GruposPesquisaComponent
  ]
})
export class GruposModule { }
