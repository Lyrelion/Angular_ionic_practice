import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistributionInfoPageRoutingModule } from './distribution-info-routing.module';

import { DistributionInfoPage } from './distribution-info.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistributionInfoPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [DistributionInfoPage]
})
export class DistributionInfoPageModule {}
