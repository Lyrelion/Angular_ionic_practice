import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisionListPageRoutingModule } from './supervision-list-routing.module';

import { SupervisionListPage } from './supervision-list.page';
import { ThsListComponentModule } from 'src/app/components/ths-list/ths-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupervisionListPageRoutingModule,
    ThsListComponentModule, // 列表
  ],
  declarations: [SupervisionListPage]
})
export class SupervisionListPageModule {}
