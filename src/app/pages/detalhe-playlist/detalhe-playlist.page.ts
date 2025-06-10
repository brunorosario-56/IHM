import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService, Playlist } from 'src/app/services/playlist.service';
import { FilmesService, Filme } from 'src/app/services/filmes.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-detalhe-playlist',
  templateUrl: './detalhe-playlist.page.html',
  styleUrls: ['./detalhe-playlist.page.scss'],
  standalone: false,
})
export class DetalhePlaylistPage implements OnInit {
  playlistId: string = '';
  playlist?: Playlist;
  filmes: Filme[] = [];
  filmesDisponiveis: Filme[] = [];
  modoSelecao = false;


  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService,
    private filmesService: FilmesService,
    private storage: StorageService
  ) {}

  async ngOnInit() {
    this.playlistId = this.route.snapshot.paramMap.get('id') || '';
    this.playlist = await this.playlistService.getById(this.playlistId);
    const todos = await this.filmesService.getFilmes();
    this.filmes = todos.filter(f => this.playlist?.filmes.includes(f.id));
  }

  async abrirSelecaoFilmes() {
    this.modoSelecao = true;

    const todos = await this.filmesService.getFilmes();
    this.filmesDisponiveis = todos.filter(f => !this.playlist?.filmes.includes(f.id));
  }

  async adicionarFilme(filmeId: string) {
    if (!this.playlist) return;
    await this.playlistService.adicionarFilme(this.playlist.id, filmeId);
    this.modoSelecao = false;
    this.ngOnInit(); // recarrega tudo
  }
  
  async removerFilme(filmeId: string) {
    if (!this.playlist) return;
    const atualizadas = this.playlist.filmes.filter(id => id !== filmeId);
    const todas = await this.playlistService.getTodas();
    const index = todas.findIndex(p => p.id === this.playlistId);
    if (index !== -1) {
      todas[index].filmes = atualizadas;
      await this.storage.set('playlists', todas);
      this.ngOnInit(); // recarrega tudo
    }
  }


}
