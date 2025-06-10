import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Filme } from './filmes.service';

export interface Evento {
  id: string;
  nome: string;
  data: string; // ISO format
  filmes: string[]; //só guarda o ID dos filmes
  convidados: string[];
  mensagens?: string[];
  votos: { [filmeId: string]: number };
}

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private storageKey = 'eventos';

  constructor(private storage: StorageService) {}

  async getTodos(): Promise<Evento[]> {
    return await this.storage.get(this.storageKey) || [];
  }

  async getById(id: string): Promise<Evento | undefined> {
    const todos = await this.getTodos();
    return todos.find(e => e.id === id);
  }

  async criar(evento: Evento): Promise<void> {
    const todos = await this.getTodos();
    todos.push(evento);
    await this.storage.set(this.storageKey, todos);
  }

  async votar(eventoId: string, filmeId: string): Promise<void> {
    const todos = await this.getTodos();
    const evento = todos.find(e => e.id === eventoId);

    if (evento) {
      if (!evento.votos[filmeId]) {
        evento.votos[filmeId] = 1;
      } else {
        evento.votos[filmeId]++;
      }
      await this.storage.set(this.storageKey, todos);
    }
  }

  async atualizar(eventoAtualizado: Evento): Promise<void> {
    const todos = await this.getTodos();
    const index = todos.findIndex(e => e.id === eventoAtualizado.id);
    if (index !== -1) {
      todos[index] = eventoAtualizado;
      await this.storage.set(this.storageKey, todos);
    }
  }


  
  //Metodo MOCK para filmes
  async getFilmesJSON(): Promise<Filme[]> {
    const resposta = await fetch('./assets/data/filmes.json');
    const json = await resposta.json();
    return Object.values(json);
  }
}
