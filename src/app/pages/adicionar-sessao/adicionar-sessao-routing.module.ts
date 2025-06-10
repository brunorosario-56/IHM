import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarSessaoPage } from './adicionar-sessao.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarSessaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarSessaoPageRoutingModule {}
