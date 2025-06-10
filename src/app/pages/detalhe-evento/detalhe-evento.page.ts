import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService, Evento } from 'src/app/services/eventos.service';
import { FilmesService, Filme } from 'src/app/services/filmes.service';
import { AmigosService, Amigo } from 'src/app/services/amigos.service';


@Component({
  selector: 'app-detalhe-evento',
  templateUrl: './detalhe-evento.page.html',
  styleUrls: ['./detalhe-evento.page.scss'],
  standalone: false,
})
export class DetalheEventoPage implements OnInit {
  eventoId: string = '';
  evento?: Evento;
  filmes: Filme[] = [];
  convidados: Amigo[] = [];
  votacaoEncerrada = false;


  constructor(
    private route: ActivatedRoute,
    private eventosService: EventosService,
    private filmesService: FilmesService,
    private amigosService: AmigosService
  ) {}

  async ngOnInit() {
    this.eventoId = this.route.snapshot.paramMap.get('id') || '';
    this.evento = await this.eventosService.getById(this.eventoId);
    
    if (this.evento && !this.evento.votos) { //verifica se evento já existe antes de mostrar os votos
      this.evento.votos = {};
    }
    
    console.log('Evento carregado:', this.evento);

    if (this.evento?.filmes?.length) {
      const todosFilmes = await this.filmesService.getFilmes();
      this.filmes = todosFilmes.filter(f => this.evento!.filmes.includes(f.id));
    }

    if (this.evento?.convidados?.length) {
      const todosAmigos = await this.amigosService.getTodos();
      this.convidados = todosAmigos.filter(a => this.evento!.convidados.includes(a.id));
    }

  }

  temVotos(): boolean {
    return !!(this.evento?.votos && window.Object.keys(this.evento.votos).length > 0);
  }

  async votar(filmeId: string) {
    if (!this.evento) return;

    if (!this.evento.votos) {
      this.evento.votos = {};
    }

    // Incrementa o voto
    if (this.evento.votos[filmeId]) {
      this.evento.votos[filmeId]++;
    } else {
      this.evento.votos[filmeId] = 1;
    }

    // Atualiza no storage
    await this.eventosService.atualizar(this.evento);

    // Recarrega os dados
    this.ngOnInit();
  }

  obterFilmeVencedor(): Filme | null {
  if (!this.evento?.votos || this.filmes.length === 0) return null;

  let vencedorId = '';
  let maxVotos = -1;

  for (const [filmeId, votos] of Object.entries(this.evento.votos)) {
    if (votos > maxVotos) {
      maxVotos = votos;
      vencedorId = filmeId;
    }
  }

  return this.filmes.find(f => f.id === vencedorId) || null;
}

async terminarVotacao() {
  const vencedor = this.obterFilmeVencedor();
  this.votacaoEncerrada = true;

  if (!vencedor) {
    alert('Nenhum filme recebeu votos ainda.');
    return;
  }

  const nomes = this.convidados.map(a => a.nome).join(', '); // já tens essa lista carregada
  alert(`Filme vencedor: ${vencedor.title}\nNotificação enviada para: ${nomes}`);
}


}
