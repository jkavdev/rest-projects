import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataTableModule } from 'primeng/datatable';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { IntegrantePesquisaComponent } from './integrante-pesquisa/integrante-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    ButtonModule,
    DataTableModule,
    InputTextModule
  ],
  declarations: [
    IntegrantePesquisaComponent
  ],
  exports: [
    IntegrantePesquisaComponent
  ]
})
export class IntegrantesModule { }
