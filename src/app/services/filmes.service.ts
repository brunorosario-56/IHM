import { Injectable } from '@angular/core';

export interface Filme {
  id: string;
  title: string;
  categoria: string;
  img: string;
  atualizacao: string;
  ano?: string;
  duracao?: string;
  classificacao?: string;
  sinopse?: string;
  plataformas?: string[];  // ex: ['Netflix', 'HBO Max']
  generos?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor() {}

  async getFilmes(): Promise<Filme[]> {
    const resposta = await fetch('./assets/data/filmes.json');
    const json = await resposta.json();
    return Object.values(json);
  }

  async getFilmeById(id: string): Promise<Filme | undefined> {
    const filmes = await this.getFilmes();
    return filmes.find(f => f.id === id);
  }
}
