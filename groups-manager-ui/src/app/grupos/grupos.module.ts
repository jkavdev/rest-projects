import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SpinnerModule } from 'primeng/spinner';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputMaskModule } from 'primeng/inputmask';

import { GruposCadastroComponent } from './grupos-cadastro/grupos-cadastro.component';
import { GruposPesquisaComponent } from './grupos-pesquisa/grupos-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
