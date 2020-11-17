import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ThsListDetailsComponent } from './ths-list-details.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule ],
  declarations: [ ThsListDetailsComponent ],
  exports: [ ThsListDetailsComponent ]
})
export class ThsListDetailsComponentModule {
}
