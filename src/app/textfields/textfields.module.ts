import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextfieldsPageRoutingModule } from './textfields-routing.module';

import { TextfieldsPage } from './textfields.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextfieldsPageRoutingModule
  ],
  declarations: [TextfieldsPage]
})
export class TextfieldsPageModule {}
