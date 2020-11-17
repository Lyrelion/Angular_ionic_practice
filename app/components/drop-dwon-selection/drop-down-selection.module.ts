import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DropDwonSelectionComponent } from './drop-dwon-selection.component';

@NgModule({
    declarations: [DropDwonSelectionComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    exports: [DropDwonSelectionComponent]
})
export class DropDwonSelectionModule { }

