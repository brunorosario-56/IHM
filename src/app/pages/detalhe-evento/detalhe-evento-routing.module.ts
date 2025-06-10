import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheEventoPage } from './detalhe-evento.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheEventoPageRoutingModule {}
