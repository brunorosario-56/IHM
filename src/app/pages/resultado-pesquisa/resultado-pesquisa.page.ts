import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme, FilmesService } from 'src/app/services/filmes.service';


@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.page.html',
  styleUrls: ['./resultado-pesquisa.page.scss'],
  standalone: false,
})
export class ResultadoPesquisaPage implements OnInit {

  termo: string = '';
  resultados: Filme[] = [];

  constructor(
    private route: ActivatedRoute,
    private filmesService: FilmesService,
  ) {}

  ngOnInit() {
    this.termo = this.route.snapshot.paramMap.get('termo') || '';
    this.filmesService.getFilmes().then(todos => {
      this.resultados = todos.filter(f => 
        f.title.toLowerCase().includes(this.termo.toLowerCase())
      );
    });
  }


}
