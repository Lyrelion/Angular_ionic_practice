import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteSuperPageRoutingModule } from './site-super-routing.module';

import { SiteSuperPage } from './site-super.page';
import { ThsListComponentModule } from 'src/app/components/ths-list/ths-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteSuperPageRoutingModule,
    ThsListComponentModule
  ],
  declarations: [SiteSuperPage]
})
export class SiteSuperPageModule {}
