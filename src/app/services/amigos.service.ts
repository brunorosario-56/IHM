import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

export interface Amigo {
  id: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class AmigosService {
  private key = 'amigos';

  constructor(private storage: StorageService) {}

  async getTodos(): Promise<Amigo[]> {
    return await this.storage.get(this.key) || [];
  }

  async adicionar(amigo: Amigo): Promise<void> {
    const amigos = await this.getTodos();
    amigos.push(amigo);
    await this.storage.set(this.key, amigos);
  }

  async remover(id: string): Promise<void> {
    const amigos = await this.getTodos();
    const filtrados = amigos.filter(a => a.id !== id);
    await this.storage.set(this.key, filtrados);
  }

  /*async limparTudo(): Promise<void> {
    await this.storage.remove(this.key);
  }*/
}
