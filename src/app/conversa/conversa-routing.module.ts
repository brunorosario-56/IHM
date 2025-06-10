import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversaPage } from './conversa.page';

const routes: Routes = [
  {
    path: '',
    component: ConversaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversaPageRoutingModule {}
