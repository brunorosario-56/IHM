import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhePlaylistPageRoutingModule } from './detalhe-playlist-routing.module';

import { DetalhePlaylistPage } from './detalhe-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhePlaylistPageRoutingModule
  ],
  declarations: [DetalhePlaylistPage]
})
export class DetalhePlaylistPageModule {}
