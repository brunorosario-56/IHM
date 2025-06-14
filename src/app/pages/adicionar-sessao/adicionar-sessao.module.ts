import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarSessaoPageRoutingModule } from './adicionar-sessao-routing.module';

import { AdicionarSessaoPage } from './adicionar-sessao.page';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdicionarSessaoPageRoutingModule
  ],
  declarations: [AdicionarSessaoPage]
})
export class AdicionarSessaoPageModule {}
