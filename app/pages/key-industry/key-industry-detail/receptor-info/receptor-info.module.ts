import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptorInfoPageRoutingModule } from './receptor-info-routing.module';

import { ReceptorInfoPage } from './receptor-info.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptorInfoPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [ReceptorInfoPage]
})
export class ReceptorInfoPageModule {}
