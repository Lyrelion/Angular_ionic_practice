import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceFilesPageRoutingModule } from './space-files-routing.module';

import { SpaceFilesPage } from './space-files.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaceFilesPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [SpaceFilesPage]
})
export class SpaceFilesPageModule {}
