import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThsListComponentModule } from 'src/app/components/ths-list/ths-list.module';
import { DropDwonSelectionModule } from 'src/app/components/drop-dwon-selection/drop-down-selection.module';
import { KeyIndustryComponentComponent } from './key-industry-component.component';

@NgModule({
    declarations: [KeyIndustryComponentComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ThsListComponentModule, // 列表
    ],
    exports: [KeyIndustryComponentComponent]
})
export class KeyIndustryComponentModule {
}