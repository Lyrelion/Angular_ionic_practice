import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAboutPageRoutingModule } from './my-about-routing.module';

import { MyAboutPage } from './my-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAboutPageRoutingModule
  ],
  declarations: [MyAboutPage]
})
export class MyAboutPageModule {}
