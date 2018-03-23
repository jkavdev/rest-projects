import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataTableModule } from 'primeng/datatable';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

import { IntegrantePesquisaComponent } from './integrante-pesquisa/integrante-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,

    ButtonModule,
    DataTableModule,
    InputTextModule,
    TooltipModule
  ],
  declarations: [
    IntegrantePesquisaComponent
  ],
  exports: [
    IntegrantePesquisaComponent
  ]
})
export class IntegrantesModule { }
