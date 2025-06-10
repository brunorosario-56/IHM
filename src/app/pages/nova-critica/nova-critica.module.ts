import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaCriticaPageRoutingModule } from './nova-critica-routing.module';

import { NovaCriticaPage } from './nova-critica.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaCriticaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NovaCriticaPage]
})
export class NovaCriticaPageModule {}
