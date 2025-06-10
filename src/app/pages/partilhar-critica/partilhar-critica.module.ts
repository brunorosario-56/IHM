import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartilharCriticaPageRoutingModule } from './partilhar-critica-routing.module';

import { PartilharCriticaPage } from './partilhar-critica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartilharCriticaPageRoutingModule
  ],
  declarations: [PartilharCriticaPage]
})
export class PartilharCriticaPageModule {}
