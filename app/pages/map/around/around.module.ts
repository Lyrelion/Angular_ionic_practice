import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AroundPageRoutingModule } from './around-routing.module';

import { AroundPage } from './around.page';
import { DropDwonSelectionModule } from 'src/app/components/drop-dwon-selection/drop-down-selection.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AroundPageRoutingModule,
    DropDwonSelectionModule, // 下拉菜单选择
  ],
  declarations: [AroundPage]
})
export class AroundPageModule {}
