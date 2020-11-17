import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeyIndustryListPageRoutingModule } from './key-industry-list-routing.module';

import { KeyIndustryListPage } from './key-industry-list.page';
import { ThsListDetailsComponentModule } from 'src/app/components/ths-list-details/ths-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeyIndustryListPageRoutingModule,
    ThsListDetailsComponentModule, // 列表
  ],
  declarations: [KeyIndustryListPage]
})
export class KeyIndustryListPageModule {}
