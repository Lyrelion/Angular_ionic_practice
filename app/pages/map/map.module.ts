import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';
import { ThsMapModule } from 'src/app/components/ths-map/ths-map.module';
import { DropDwonSelectionModule } from 'src/app/components/drop-dwon-selection/drop-down-selection.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    ThsMapModule, // 地图模块
    DropDwonSelectionModule, // 下拉列表
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
