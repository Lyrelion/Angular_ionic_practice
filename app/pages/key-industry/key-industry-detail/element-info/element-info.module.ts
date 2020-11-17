import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElementInfoPageRoutingModule } from './element-info-routing.module';

import { ElementInfoPage } from './element-info.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementInfoPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [ElementInfoPage]
})
export class ElementInfoPageModule {}
