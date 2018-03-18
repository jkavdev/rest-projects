import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  grupos: [
    { nome: 'Movimento', igreja: 'Catolica' },
    { nome: 'Gam', igreja: 'Merge' },
    { nome: 'Grupos', igreja: 'Santa' }
  ];
}
