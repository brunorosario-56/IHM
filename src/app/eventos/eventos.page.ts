import { Component } from '@angular/core';
import { EventosService, Evento } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  standalone: false,
})
export class EventosPage {
  dataSelecionada: string = new Date().toISOString(); // hoje
  eventos: Evento[] = [];

  constructor(private eventosService: EventosService) {}

  async ionViewWillEnter() {
    this.carregarEventos();
  }

  async carregarEventos() {
    const todos = await this.eventosService.getTodos();
    const dataISO = this.dataSelecionada.split('T')[0]; // yyyy-mm-dd
    this.eventos = todos.filter(e => e.data.startsWith(dataISO));
  }

  aoSelecionarData(event: any) {
    this.dataSelecionada = event.detail.value;
    this.carregarEventos();
  }
}
