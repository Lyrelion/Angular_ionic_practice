import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteSuperDetailPageRoutingModule } from './site-super-detail-routing.module';

import { SiteSuperDetailPage } from './site-super-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteSuperDetailPageRoutingModule
  ],
  declarations: [SiteSuperDetailPage]
})
export class SiteSuperDetailPageModule {}
