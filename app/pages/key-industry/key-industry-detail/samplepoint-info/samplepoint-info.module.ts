import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplepointInfoPageRoutingModule } from './samplepoint-info-routing.module';

import { SamplepointInfoPage } from './samplepoint-info.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplepointInfoPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [SamplepointInfoPage]
})
export class SamplepointInfoPageModule {}
