import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheEventoPageRoutingModule } from './detalhe-evento-routing.module';

import { DetalheEventoPage } from './detalhe-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheEventoPageRoutingModule
  ],
  declarations: [DetalheEventoPage]
})
export class DetalheEventoPageModule {}
