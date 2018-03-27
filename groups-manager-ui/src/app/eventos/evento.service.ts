import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { EventoFiltro } from './evento-pesquisa/evento-pesquisa.component';

@Injectable()
export class EventoService {

  eventosUrl = 'http://localhost:8086/eventos';

  constructor(private http: Http) { }

  salvar(evento: any): Promise<any> {
    return this.http.post(`${this.eventosUrl}`, evento)
      .toPromise()
      .then(resp => resp.json());
  }

  pesquisar(filtro: EventoFiltro): Promise<any> {
    const params = new URLSearchParams();

    if (filtro.de) {
      params.set('de', JSON.stringify(filtro.de));
    }
    if (filtro.ate) {
      params.set('ate', JSON.stringify(filtro.ate));
    }

    return this.http.get(`${this.eventosUrl}?pesquisa`, { search: filtro })
      .toPromise()
      .then(resp => resp.json());
  }

}
