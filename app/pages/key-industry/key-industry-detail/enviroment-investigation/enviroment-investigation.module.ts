import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviromentInvestigationPageRoutingModule } from './enviroment-investigation-routing.module';

import { EnviromentInvestigationPage } from './enviroment-investigation.page';
import { BaseInfoModule } from 'src/app/components/base-info/base-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviromentInvestigationPageRoutingModule,
    BaseInfoModule, // 详情数据展示
  ],
  declarations: [EnviromentInvestigationPage]
})
export class EnviromentInvestigationPageModule {}
