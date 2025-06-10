import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhePlaylistPage } from './detalhe-playlist.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhePlaylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhePlaylistPageRoutingModule {}
