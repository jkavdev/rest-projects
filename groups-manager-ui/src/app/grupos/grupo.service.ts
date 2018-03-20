import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GrupoService {

  gruposUrl = 'http://localhost:8086/grupos';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    return this.http.get(`${this.gruposUrl}`)
      .toPromise()
      .then(resp => resp.json());
  }

}
