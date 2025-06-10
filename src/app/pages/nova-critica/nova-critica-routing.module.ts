import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaCriticaPage } from './nova-critica.page';

const routes: Routes = [
  {
    path: '',
    component: NovaCriticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaCriticaPageRoutingModule {}
