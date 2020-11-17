import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { MyLovePage } from './my-love.page';
import { MyLovePageRoutingModule } from './my-love-routing.module';
import { ThsListComponentModule } from 'src/app/components/ths-list/ths-list.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyLovePageRoutingModule,
    ThsListComponentModule
  ],
  declarations: [MyLovePage]
})
export class MyLovePageModule {}
