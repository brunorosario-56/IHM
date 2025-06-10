import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarAmigoPageRoutingModule } from './adicionar-amigo-routing.module';

import { AdicionarAmigoPage } from './adicionar-amigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarAmigoPageRoutingModule
  ],
  declarations: [AdicionarAmigoPage]
})
export class AdicionarAmigoPageModule {}
