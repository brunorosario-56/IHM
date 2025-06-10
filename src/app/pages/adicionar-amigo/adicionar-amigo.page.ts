import { Component } from '@angular/core';
import { AmigosService, Amigo } from 'src/app/services/amigos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-amigo',
  templateUrl: './adicionar-amigo.page.html',
  styleUrls: ['./adicionar-amigo.page.scss'],
  standalone: false,
})
export class AdicionarAmigoPage {
  nome = '';

  constructor(private amigosService: AmigosService, private router: Router) {}

  async adicionar() {
    if (!this.nome.trim()) return;

    await this.amigosService.adicionar({
      id: Date.now().toString(),
      nome: this.nome.trim()
    });

    this.nome = '';
    this.router.navigate(['/tabs/partilhar-critica']);
  }
}
