import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AmigosService, Amigo } from 'src/app/services/amigos.service';
import { StorageService } from 'src/app/services/storage.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-partilhar-critica',
  templateUrl: './partilhar-critica.page.html',
  styleUrls: ['./partilhar-critica.page.scss'],
  standalone: false,
})
export class PartilharCriticaPage {
  critica: any;
  filmeId: string = '';
  mensagem: string = '';
  amigos: Amigo[] = [];

  constructor(private router: Router, 
    private route: ActivatedRoute, //adicionei
    private amigosService: AmigosService, 
    private storage: StorageService,
    private location:Location) {

    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;
    this.critica = state?.['critica'];
    //this.filmeId = state?.['filmeId'];

    this.route.queryParams.subscribe(params => {
      this.filmeId = params['filmeId'] || '';
    });
  }

  async ionViewWillEnter() {
    this.amigos = await this.amigosService.getTodos();
    console.log('Amigos carregados:', this.amigos);
  }

  async partilharCom(amigo: Amigo) {
    const envio = {
      para: amigo.nome,
      critica: this.critica,
      mensagem: this.mensagem,
      dataEnvio: new Date().toISOString()
    };

    const historico = await this.storage.get('conversas') || [];
    historico.push(envio);
    await this.storage.set('conversas', historico);

    console.log(' Enviar para:', envio);
    alert(`Crítica enviada para ${amigo.nome}!`);
    this.mensagem = '';
  }

  irParaConversas() {
    this.router.navigate(['/tabs/conversa'], {
      state: { backTo: '/tabs/partilhar-critica' }
    });
  }

  voltarParaDetalhe() {
    this.router.navigate(['/tabs/detalhe-filme', this.filmeId]);
  }

  /*voltar() {
    this.location.back();
  }*/
  
}
