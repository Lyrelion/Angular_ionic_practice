import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeyIndustryDetailPageRoutingModule } from './key-industry-detail-routing.module';

import { KeyIndustryDetailPage } from './key-industry-detail.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeyIndustryDetailPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [KeyIndustryDetailPage]
})
export class KeyIndustryDetailPageModule {}
