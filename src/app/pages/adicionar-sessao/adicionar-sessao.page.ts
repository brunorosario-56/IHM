import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmigosService, Amigo } from 'src/app/services/amigos.service';
import { EventosService } from 'src/app/services/eventos.service';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Router } from '@angular/router';
import { Filme } from 'src/app/services/filmes.service';
import { FilmesService } from 'src/app/services/filmes.service';



@Component({
  selector: 'app-adicionar-sessao',
  templateUrl: './adicionar-sessao.page.html',
  styleUrls: ['./adicionar-sessao.page.scss'],
  standalone: false,
})
export class AdicionarSessaoPage implements OnInit {
  form!: FormGroup;

  amigos: Amigo[] = [];
  selecionados: Set<string> = new Set();

  playlists: { id: string; nome: string; filmes: string[] }[] = [];
  playlistSelecionada: string = '';

  filmesDaPlaylist: Filme[] = [];
  filmesSelecionados: Set<string> = new Set();


  async selecionarPlaylist(id: string) {
    this.playlistSelecionada = id;

    await this.carregarFilmesDaPlaylist(id);

  }

  toggleFilme(id: string) {
    if (this.filmesSelecionados.has(id)) {
      this.filmesSelecionados.delete(id);
    } else {
      this.filmesSelecionados.add(id);
    }
  }

  constructor(
    private fb: FormBuilder,
    private amigosService: AmigosService,
    private eventosService: EventosService,
    private playlistService: PlaylistService,
    private filmesService: FilmesService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      mensagem: ['']
    });

    this.amigos = await this.amigosService.getTodos();
    this.playlists = await this.playlistService.getTodas();

  }

  toggleAmigo(id: string) {
    if (this.selecionados.has(id)) {
      this.selecionados.delete(id);
    } else {
      this.selecionados.add(id);
    }
  }

  async criarSessao() {
    if (this.form.invalid || this.selecionados.size === 0 || !this.playlistSelecionada) {
      alert('Preenche todos os campos obrigatórios.');
      return;
    }

    const novoEvento = {
      id: Date.now().toString(),
      nome: this.form.value.nome,
      data: new Date().toISOString(), 
      filmes: [...this.filmesSelecionados], // ← IDs dos filmes selecionados
      convidados: [...this.selecionados], // ← IDs dos amigos selecionados
      mensagens: [this.form.value.mensagem],
      votos: {}
    };

    await this.eventosService.criar(novoEvento);
    this.router.navigate(['/tabs/eventos']);
  }

  async carregarFilmesDaPlaylist(id: string) {
    const playlist = this.playlists.find(p => p.id === id);
    if (!playlist) return;

    const todosFilmes = await this.filmesService.getFilmes();
    this.filmesDaPlaylist = todosFilmes.filter(f => playlist.filmes.includes(f.id));
  }



}
