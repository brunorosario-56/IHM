import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarAmigoPage } from './adicionar-amigo.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarAmigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarAmigoPageRoutingModule {}
