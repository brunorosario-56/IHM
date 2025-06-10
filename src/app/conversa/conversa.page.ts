import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.page.html',
  styleUrls: ['./conversa.page.scss'],
  standalone: false,
})
export class ConversaPage {
  conversas: any[] = [];
  backTo: string = '/tabs/inicio';

  constructor(private storage: StorageService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;
    this.backTo = state?.['backTo']; 
  }

  async ionViewWillEnter() {
    const dados = await this.storage.get('conversas');
    this.conversas = dados || [];
  }
}
