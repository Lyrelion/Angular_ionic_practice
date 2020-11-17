import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiskScreeningResultPageRoutingModule } from './risk-screening-result-routing.module';

import { RiskScreeningResultPage } from './risk-screening-result.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiskScreeningResultPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [RiskScreeningResultPage]
})
export class RiskScreeningResultPageModule {}
