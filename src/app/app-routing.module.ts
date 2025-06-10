import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/inicio',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'resultado-pesquisa',
    loadChildren: () => import('./pages/resultado-pesquisa/resultado-pesquisa.module').then(m => m.ResultadoPesquisaPageModule)
  },
  {
    path: 'detalhe-filme',
    loadChildren: () => import('./pages/detalhe-filme/detalhe-filme.module').then(m => m.DetalheFilmePageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  /*{
    path: 'definicoes',
    loadChildren: () => import('./definicoes/definicoes.module').then( m => m.DefinicoesPageModule)
  },*/
  {
    path: 'nova-critica',
    loadChildren: () => import('./pages/nova-critica/nova-critica.module').then( m => m.NovaCriticaPageModule)
  },
  {
    path: 'partilhar-critica/:id',
    loadChildren: () => import('./pages/partilhar-critica/partilhar-critica.module').then( m => m.PartilharCriticaPageModule)
  },
  {
    path: 'adicionar-amigo',
    loadChildren: () => import('./pages/adicionar-amigo/adicionar-amigo.module').then( m => m.AdicionarAmigoPageModule)
  },
  {
    path: 'adicionar-sessao',
    loadChildren: () => import('./pages/adicionar-sessao/adicionar-sessao.module').then( m => m.AdicionarSessaoPageModule)
  },
  {
    path: 'detalhe-evento',
    loadChildren: () => import('./pages/detalhe-evento/detalhe-evento.module').then( m => m.DetalheEventoPageModule)
  },
  {
    path: 'detalhe-playlist',
    loadChildren: () => import('./pages/detalhe-playlist/detalhe-playlist.module').then( m => m.DetalhePlaylistPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
