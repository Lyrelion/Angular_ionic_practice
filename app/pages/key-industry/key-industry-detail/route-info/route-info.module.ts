import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouteInfoPageRoutingModule } from './route-info-routing.module';

import { RouteInfoPage } from './route-info.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouteInfoPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [RouteInfoPage]
})
export class RouteInfoPageModule {}
