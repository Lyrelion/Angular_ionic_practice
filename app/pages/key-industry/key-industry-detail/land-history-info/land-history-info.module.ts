import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandHistoryInfoPageRoutingModule } from './land-history-info-routing.module';

import { LandHistoryInfoPage } from './land-history-info.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandHistoryInfoPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [LandHistoryInfoPage]
})
export class LandHistoryInfoPageModule {}
