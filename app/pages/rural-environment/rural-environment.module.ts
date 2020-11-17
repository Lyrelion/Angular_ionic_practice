import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuralEnvironmentPageRoutingModule } from './rural-environment-routing.module';

import { RuralEnvironmentPage } from './rural-environment.page';
import { ThsListDetailsComponentModule } from 'src/app/components/ths-list-details/ths-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuralEnvironmentPageRoutingModule,
    ThsListDetailsComponentModule, // 列表
  ],
  declarations: [RuralEnvironmentPage]
})
export class RuralEnvironmentPageModule {}
