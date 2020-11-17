import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SourcePollutionInfoPageRoutingModule } from './source-pollution-info-routing.module';

import { SourcePollutionInfoPage } from './source-pollution-info.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SourcePollutionInfoPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [SourcePollutionInfoPage]
})
export class SourcePollutionInfoPageModule {}
