import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../noticia.service';

@Component({
  selector: 'app-noticia-pesquisa',
  templateUrl: './noticia-pesquisa.component.html',
  styleUrls: ['./noticia-pesquisa.component.css']
})
export class NoticiaPesquisaComponent implements OnInit {

  noticias = [];

  constructor(
    private noticiaService: NoticiaService) { }

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.noticiaService.buscarTodas()
      .then(noticias => {this.noticias = noticias; console.log(noticias)});
  }

}
