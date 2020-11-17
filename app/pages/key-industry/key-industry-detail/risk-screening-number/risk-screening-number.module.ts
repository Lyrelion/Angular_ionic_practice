import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiskScreeningNumberPageRoutingModule } from './risk-screening-number-routing.module';

import { RiskScreeningNumberPage } from './risk-screening-number.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiskScreeningNumberPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [RiskScreeningNumberPage]
})
export class RiskScreeningNumberPageModule {}
