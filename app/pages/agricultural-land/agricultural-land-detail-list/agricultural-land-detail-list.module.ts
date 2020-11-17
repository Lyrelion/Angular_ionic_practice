import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgriculturalLandDetailListPageRoutingModule } from './agricultural-land-detail-list-routing.module';

import { AgriculturalLandDetailListPage } from './agricultural-land-detail-list.page';
import { ThsListDetailsComponentModule } from 'src/app/components/ths-list-details/ths-list.module';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgriculturalLandDetailListPageRoutingModule,
    ThsListDetailsComponentModule, // 列表
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [AgriculturalLandDetailListPage]
})
export class AgriculturalLandDetailListPageModule {}
