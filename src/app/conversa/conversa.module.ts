import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConversaPage } from './conversa.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConversaPageRoutingModule } from './conversa-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ConversaPageRoutingModule
  ],
  declarations: [ConversaPage]
})
export class ConversaPageModule {}
