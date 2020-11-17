import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisionPageRoutingModule } from './supervision-routing.module';

import { SupervisionPage } from './supervision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupervisionPageRoutingModule
  ],
  declarations: [SupervisionPage]
})
export class SupervisionPageModule {}
