import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstructionLandPageRoutingModule } from './construction-land-routing.module';

import { ConstructionLandPage } from './construction-land.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstructionLandPageRoutingModule
  ],
  declarations: [ConstructionLandPage]
})
export class ConstructionLandPageModule {}
