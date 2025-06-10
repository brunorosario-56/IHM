import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

interface Filme {
  id: string;
  title: string;
  categoria: string;
  img: string;
  atualizacao: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  public filmes: Filme[] = [];
  public series: Filme[] = [];
  public populares: Filme[] = [];
  public pesquisasRecentes: string[] = [];
  public mostrarSugestoes: boolean = false;
  public termoDigitado: string = '';
  public sugestoesFilmes: string[] = [];


  constructor(private router: Router, private storageService: StorageService) {}

  async ngOnInit() {
    // Carregar filmes
    const resposta = await fetch('./assets/data/filmes.json');
    const json = await resposta.json();
    const todos: Filme[] = Object.values(json);
    this.filmes = todos.filter(f => f.categoria === 'filme');
    this.series = todos.filter(f => f.categoria === 'serie');
    this.populares = todos.filter(f => f.categoria === 'popular');
    this.sugestoesFilmes = todos.map(f => f.title);


    // Carregar pesquisas guardadas
    const armazenadas = await this.storageService.get('pesquisas');
    this.pesquisasRecentes = armazenadas || [];
  }

  async pesquisar(termo: string) {
    termo = termo.trim();
    if (!termo) return;
    
    this.mostrarSugestoes = false;

    // Guardar nova pesquisa
    if (!this.pesquisasRecentes.includes(termo)) {
      this.pesquisasRecentes.unshift(termo);
      if (this.pesquisasRecentes.length > 5) {
        this.pesquisasRecentes.pop(); // manter máximo 5
      }
      await this.storageService.set('pesquisas', this.pesquisasRecentes);
    }

    this.router.navigate(['resultado-pesquisa', termo]);

  }
  
  get sugestoesFiltradas(): string[] {
    if (!this.termoDigitado) {
      return [];
    }

    return this.sugestoesFilmes.filter(titulo =>
      titulo.toLowerCase().includes(this.termoDigitado.toLowerCase())
    );
  }

}
