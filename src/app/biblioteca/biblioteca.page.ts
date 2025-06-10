import { Component, OnInit } from '@angular/core';
import { PlaylistService, Playlist } from 'src/app/services/playlist.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
  standalone: false,
})
export class BibliotecaPage implements OnInit {
  playlists: Playlist[] = [];

  constructor(
    private playlistService: PlaylistService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    this.playlists = await this.playlistService.getTodas();
  }

  async novaPlaylist() {
  const alert = await this.alertCtrl.create({
    header: 'Nova Playlist',
    inputs: [
      {
        name: 'nome',
        type: 'text',
        placeholder: 'Nome da playlist'
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Criar',
        handler: async (data) => {
          if (!data.nome) return;

          const nova = {
            id: Date.now().toString(),
            nome: data.nome,
            filmes: []
          };

          await this.playlistService.criar(nova);
          this.playlists = await this.playlistService.getTodas();
        }
      }
    ]
  });

  await alert.present();
}


  abrirPlaylist(id: string) {
    this.router.navigate(['/tabs/detalhe-playlist', id]);
  }
}
