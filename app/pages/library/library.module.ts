import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryPageRoutingModule } from './library-routing.module';

import { LibraryPage } from './library.page';
import { DropDwonSelectionModule } from 'src/app/components/drop-dwon-selection/drop-down-selection.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryPageRoutingModule,
    DropDwonSelectionModule
  ],
  declarations: [LibraryPage]
})
export class LibraryPageModule {}
