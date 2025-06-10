import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartilharCriticaPage } from './partilhar-critica.page';

const routes: Routes = [
  {
    path: '',
    component: PartilharCriticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartilharCriticaPageRoutingModule {}
