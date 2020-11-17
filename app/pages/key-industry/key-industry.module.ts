import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeyIndustryPageRoutingModule } from './key-industry-routing.module';

import { KeyIndustryPage } from './key-industry.page';
import { ThsListComponentModule } from 'src/app/components/ths-list/ths-list.module';
import { DropDwonSelectionModule } from 'src/app/components/drop-dwon-selection/drop-down-selection.module';
import { KeyIndustryComponentModule } from './key-industry-component/key-industry-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeyIndustryPageRoutingModule,
    ThsListComponentModule, // 列表
    DropDwonSelectionModule, // 下拉菜单选择
    KeyIndustryComponentModule, // 列表组件-- 封装了请求方法
  ],
  declarations: [KeyIndustryPage]
})
export class KeyIndustryPageModule {}
