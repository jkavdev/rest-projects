import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class GrupoFiltro {
  nome: string;
}

@Injectable()
export class GrupoService {

  gruposUrl = 'http://localhost:8086/grupos';

  constructor(private http: Http) { }

  pesquisar(filtro: GrupoFiltro): Promise<any> {
    const params = new URLSearchParams();

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.gruposUrl}?pesquisa`, { search: filtro })
      .toPromise()
      .then(resp => resp.json());
  }

  excluir(codigo: number): Promise<any> {
    return this.http.delete(`${this.gruposUrl}/${codigo}`)
      .toPromise()
      .then(() => null)
  }

}
