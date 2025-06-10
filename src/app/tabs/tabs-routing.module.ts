import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'conversa',
        loadChildren: () => import('../conversa/conversa.module').then(m => m.ConversaPageModule)
      },
      {
        path: 'biblioteca',
        loadChildren: () => import('../biblioteca/biblioteca.module').then(m => m.BibliotecaPageModule)
      },
      {
        path: 'eventos',
        loadChildren: () => import('../eventos/eventos.module').then(m => m.EventosPageModule)
      },
      /*{
        path: 'definicoes',
        loadChildren: () => import('../definicoes/definicoes.module').then(m => m.DefinicoesPageModule)
      },*/
      {
        path: 'resultado-pesquisa/:termo',
        loadChildren: () =>
          import('../pages/resultado-pesquisa/resultado-pesquisa.module').then(
            m => m.ResultadoPesquisaPageModule
          )
      },
      {

        path: 'detalhe-filme/:id',
        loadChildren: () =>
          import('../pages/detalhe-filme/detalhe-filme.module').then(
            m => m.DetalheFilmePageModule
          )
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      },
      {
        path: 'nova-critica/:id',
        loadChildren: () =>
         import('../pages/nova-critica/nova-critica.module').then(
            m => m.NovaCriticaPageModule
          )
      },
      {
        path: 'partilhar-critica',
        loadChildren: () => import('../pages/partilhar-critica/partilhar-critica.module').then(m => m.PartilharCriticaPageModule)
      },
      {
        path: 'adicionar-amigo',
        loadChildren: () => import('../pages/adicionar-amigo/adicionar-amigo.module').then(m => m.AdicionarAmigoPageModule)
      },
      {
        path: 'adicionar-sessao',
        loadChildren: () => import('../pages/adicionar-sessao/adicionar-sessao.module').then(m => m.AdicionarSessaoPageModule)
      },
      {
        path: 'detalhe-evento/:id',
        loadChildren: () =>
          import('../pages/detalhe-evento/detalhe-evento.module').then(m => m.DetalheEventoPageModule)
      },
      {
        path: 'detalhe-playlist/:id',
        loadChildren: () =>
          import('../pages/detalhe-playlist/detalhe-playlist.module').then(m => m.DetalhePlaylistPageModule)
      }



    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
