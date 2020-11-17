import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroundwaterPageRoutingModule } from './groundwater-routing.module';

import { GroundwaterPage } from './groundwater.page';
import { DropDwonSelectionModule } from 'src/app/components/drop-dwon-selection/drop-down-selection.module';
import { ThsListComponentModule} from 'src/app/components/ths-list/ths-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroundwaterPageRoutingModule,
    DropDwonSelectionModule,
    ThsListComponentModule
  ],
  declarations: [GroundwaterPage]
})
export class GroundwaterPageModule {}
