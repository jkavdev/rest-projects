import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { DataTableModule } from 'primeng/datatable';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown'
import { AccordionModule } from 'primeng/accordion';

import { SharedModule } from '../shared/shared.module';

import { NoticiaCadastroComponent } from './noticia-cadastro/noticia-cadastro.component';
import { NoticiaPesquisaComponent } from './noticia-pesquisa/noticia-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,

    ButtonModule,
    InputTextModule,
    EditorModule,
    MultiSelectModule,
    DropdownModule,
    AccordionModule,

    SharedModule
  ],
  declarations: [
    NoticiaCadastroComponent,
    NoticiaPesquisaComponent
  ], exports: [
    NoticiaCadastroComponent,
    NoticiaPesquisaComponent
  ]
})
export class NoticiasModule { }
