import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgriculturalLandPageRoutingModule } from './agricultural-land-routing.module';

import { AgriculturalLandPage } from './agricultural-land.page';
import { ThsListComponentModule } from 'src/app/components/ths-list/ths-list.module';
import { DropDwonSelectionModule } from 'src/app/components/drop-dwon-selection/drop-down-selection.module';
import { AgriculturalLandComponentModule } from '../agricultural-land-component/agricultural-land-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgriculturalLandPageRoutingModule,
    ThsListComponentModule, // 列表
    DropDwonSelectionModule, // 下拉菜单选择
    AgriculturalLandComponentModule
  ],
  declarations: [AgriculturalLandPage]
})
export class AgriculturalLandPageModule {}
