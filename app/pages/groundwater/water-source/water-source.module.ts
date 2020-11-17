import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterSourcePageRoutingModule } from './water-source-routing.module';

import { WaterSourcePage } from './water-source.page';
import { BaseInfoModule } from '../../../components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaterSourcePageRoutingModule,
    BaseInfoModule
  ],
  declarations: [WaterSourcePage]
})
export class WaterSourcePageModule {}
