import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme, FilmesService } from 'src/app/services/filmes.service';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';



@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.page.html',
  styleUrls: ['./detalhe-filme.page.scss'],
  standalone: false,
})
export class DetalheFilmePage implements OnInit {

  filme: Filme | undefined;
  public filmeId: string = '';
  public criticas: { texto: string; data: string; utilizador?: string }[] = [];
  public novaCriticaTexto: string = '';

  constructor(
    private route: ActivatedRoute,
    private filmesService: FilmesService,
    private router: Router,
    private storage: StorageService
  ) {}


  async ngOnInit() {
    this.filmeId = this.route.snapshot.paramMap.get('id') || '';
    this.filme = await this.filmesService.getFilmeById(this.filmeId);
    const guardadas = await this.storage.get(`criticas-${this.filmeId}`) || [];
    this.criticas = guardadas;
  }

  escreverCritica() {
    this.router.navigate(['tabs', 'nova-critica', this.filme?.id]);
  }

  async publicarCritica() {
    if (!this.novaCriticaTexto.trim()) return;

    const nova = {
      texto: this.novaCriticaTexto,
      data: new Date().toISOString(),
      utilizador: 'Tu'
    };
    this.criticas.push(nova);
    await this.storage.set(`criticas-${this.filmeId}`, this.criticas);
    this.novaCriticaTexto = '';
  }


}
