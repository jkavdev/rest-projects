import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { SpinnerModule } from 'primeng/spinner';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { SharedModule } from '../shared/shared.module';

import { EventoCadastroComponent } from './evento-cadastro/evento-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,

    CurrencyMaskModule,

    CalendarModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    SpinnerModule,
    DropdownModule,
    InputMaskModule,

    SharedModule
  ],
  declarations: [
    EventoCadastroComponent
  ],
  exports: [
    EventoCadastroComponent
  ]
})
export class EventosModule { }
