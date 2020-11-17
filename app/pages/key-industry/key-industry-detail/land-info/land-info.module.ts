import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandInfoPageRoutingModule } from './land-info-routing.module';

import { LandInfoPage } from './land-info.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandInfoPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [LandInfoPage]
})
export class LandInfoPageModule {}
