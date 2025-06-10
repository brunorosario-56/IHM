import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

export interface Playlist {
  id: string;
  nome: string;
  filmes: string[];
}

@Injectable({ providedIn: 'root' })
export class PlaylistService {
  private key = 'playlists';

  constructor(private storage: StorageService) {}

  async getTodas(): Promise<Playlist[]> {
    return await this.storage.get(this.key) || [];
  }

  async getById(id: string): Promise<Playlist | undefined> {
    const listas = await this.getTodas();
    return listas.find(p => p.id === id);
  }

  async criar(nova: Playlist): Promise<void> {
    const listas = await this.getTodas();
    listas.push(nova);
    await this.storage.set(this.key, listas);
  }

  async adicionarFilme(playlistId: string, filmeId: string): Promise<void> {
    const listas = await this.getTodas();
    const p = listas.find(p => p.id === playlistId);
    if (p && !p.filmes.includes(filmeId)) {
      p.filmes.push(filmeId);
      await this.storage.set(this.key, listas);
    }
  }
}
