import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventoService {

  eventosUrl = 'http://localhost:8086/eventos';

  constructor(private http: Http) { }

  salvar(evento: any): Promise<any> {
    return this.http.post(`${this.eventosUrl}`, evento)
      .toPromise()
      .then(resp => resp.json());
  }

}
